// TODO: Check handling reporting violations (helmet) & bugs (sentry).
// TODO: Improve typings (helmet, nodemailer, etc.), i.e. all imported by *.

import * as admin from 'firebase-admin';
import * as csurf from 'csurf';
import * as express from 'express';
import * as functions from 'firebase-functions';
// import * as helmet from 'helmet'; // TODO: featurePolicy type doesn't exists, issue: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/37627.
import * as logger from 'morgan';
import * as nodemailer from 'nodemailer';
import * as rateLimit from 'express-rate-limit';
import * as session from 'express-session';
import { ApplicationModule } from './app.module';
import { enableProdMode } from '@angular/core';
import { Express } from 'express';
import {
  ExpressAdapter,
  NestExpressApplication
} from '@nestjs/platform-express';
import { join } from 'path';
import { NestFactory } from '@nestjs/core';

const helmet = require('helmet'); // TODO: featurePolicy type doesn't exists, issue: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/37627.

enableProdMode(); // Faster server renders in production mode (development doesn't need it).

admin.initializeApp(); // Initialize Firebase SDK.

const expressApp: Express = express(); // Create Express instance.

// TODO: Check other Nodemailer options like bcc and others.
const mailTransport = nodemailer.createTransport({
  // Non-null assertion operators are required to let know the compiler that this value is not empty and exists.
  host: process.env.MAIL_HOST!,
  // tslint:disable-next-line:radix
  port: parseInt(process.env.MAIL_PORT!),
  auth: {
    user: process.env.MAIL_ACCOUNT,
    pass: process.env.MAIL_PASSWORD
  }
});

// Create and init NestJS application based on Express instance.
(async () => {
  expressApp.use(logger('dev')); // Use logging.
  expressApp.use(helmet()); // Enable Helmet's 7 default middleware protections, i.e. dnsPrefetchControl, frameguard, hidePoweredBy, hsts, ieNoOpen, noSniff and xssFilter.

  // Content-Security Policy (CSP) rules. TODO: Finish it by checking which one to defaultSrc which one to scriptSrc.
  expressApp.use(
    helmet.contentSecurityPolicy({
      browserSniff: false,
      directives: {
        baseUri: ["'self'"],
        defaultSrc: [
          "'none'",
          'https://in.hotjar.com',
          'https://agastya-version.oswaldlabs.com',
          'https://firebasestorage.googleapis.com', // Cloud Storage for Firebase.
          'https://firestore.googleapis.com', // Cloud Firestore.
          'https://fonts.googleapis.com',
          'https://fonts.gstatic.com',
          'https://script.hotjar.com',
          'https://static.hotjar.com',
          'https://platform.oswaldlabs.com',
          'https://platform-beta.oswaldlabs.com',
          'https://vars.hotjar.com/',
          'wss://ws4.hotjar.com',
          'wss://ws7.hotjar.com',
          'https://www.google.com', // reCAPTCHA.
          'https://www.google-analytics.com',
          'https://www.googletagmanager.com'
        ],
        frameAncestors: ["'self'"],
        formAction: ["'self'"],
        imgSrc: [
          "'self'",
          'https://www.google.com' // reCAPTCHA.
        ],
        styleSrc: [
          "'self'",
          "'unsafe-inline'", // Unsecure, but required in order to render styles generated by Angular compiler, which on SSR are generated as inline styles.
          'https://fonts.googleapis.com'
        ],
        scriptSrc: [
          "'self'",
          "'unsafe-eval'", // Unsecure, but required due to Angular's SSR.
          'https://agastya-version.oswaldlabs.com',
          'https://ditectrev.us15.list-manage.com', // MailChimp.
          'https://script.hotjar.com',
          'https://static.hotjar.com',
          'https://platform.oswaldlabs.com',
          'https://platform-beta.oswaldlabs.com',
          'https://vars.hotjar.com/',
          'wss://ws4.hotjar.com',
          'wss://ws7.hotjar.com',
          'https://www.googletagmanager.com',
          'https://www.google-analytics.com',
          'https://www.google.com', // reCAPTCHA.
          'https://www.gstatic.com' // reCAPTCHA.
        ],
        upgradeInsecureRequests: true // TODO: Check if it helps with blocking loading of active/passive content over insecure FTP/HTTP.
      }
    })
  );

  expressApp.use(helmet.permittedCrossDomainPolicies()); // Prevent Adobe Flash and Adobe Acrobat from loading content.

  // Enforce to expect Certificate Transparency (CT) for 24 hours.
  expressApp.use(
    helmet.expectCt({
      enforce: true,
      maxAge: 24 * 60 * 60 // In seconds, regard it for max 24 hours.
    })
  );

  // Limit website features by implementing Feature Policy.
  expressApp.use(
    helmet.featurePolicy({
      features: {
        fullscreen: ["'self'"],
        payment: ["'none'"],
        syncXhr: ["'none'"]
      }
    })
  );

  expressApp.use(helmet.noCache()); // Disable client-side caching.
  expressApp.use(helmet.referrerPolicy({ policy: 'same-origin' })); // Send Referer header only for pages on the same origin.

  // Handle HTTP POST request and expose it on "req.body".
  expressApp.use(express.json());
  expressApp.use(express.urlencoded({ extended: false })); // Accept only arrays or strings.

  // Improve sessions and cookies security.
  expressApp.use(
    session({
      cookie: {
        maxAge: 3600000, // In milliseconds, keep the session for maximum 1 hour and later expire it. Cookie by default (in the csrf package) has the same expiration date.
        secure: true, // Enforce cookies has to be transmitted only through HTTPS. It prevents cookie from being transmitted through insecure HTTP.
        sameSite: true, // Mitigate risk of cross-origin information leakage. Robust refence against CSRF, mitigate XSSI too.
        signed: true // Sign a cookie to prevent from cookie forging.
      },
      name: 'SESSION_ID', // Change default name of session cookie which reveals application's internal technology. For Express apps this is "connect.sid".
      resave: false, // Disable forcing session to be saved back to the sessions store, even if the session was never modified during the request. Enabling it could potentially create race conditions where client makes 2 parallels requests to the server.
      saveUninitialized: true, // Save uninitialized session to the store.
      secret: process.env.SESSION_SECRET! // Non-null assertion operator is required to let know the compiler that this value is not empty and exists.
    })
  );

  expressApp.use(csurf()); // Enable CSRF protection. Must be after sessions and cookies security.

  expressApp.set('trust proxy', 1); // Trust first proxy. Enable because the application is behind reverse proxy (Firebase). For Node.js applications behind proxy it is required to enable it.

  expressApp.use(
    new rateLimit({
      max: 100, // Max 100 connections per windowMs can be done before sending HTTP 429 (Too Many Requests) response code. After 100 requests within 15 minutes block the IP.
      message:
        'This IP has been temporarily blocked due to too many requests, please try again later.',
      windowMs: 15 * 60 * 1000 // In milliseconds, keep records of requests in memory for 15 minutes.
    })
  );

  const nestApp = await NestFactory.create<NestExpressApplication>(
    ApplicationModule,
    new ExpressAdapter(expressApp)
  );

  nestApp.useStaticAssets(join(process.cwd(), 'dist/apps/ditectrev-browser'));

  // Enable Cross Origin Resource Sharing (CORS) to serve external resources.
  nestApp.enableCors({
    maxAge: 3600, // In seconds, regard it for max 1 hour.
    methods: 'POST',
    origin: true
  });

  nestApp.init();
  // await nestApp.listen(4479); // Initialize NestJS server, and listen on specific port (for testing on localhost).
})().catch(err => console.error(err));

// TODO: Add ".region('europe-west1')" all Firebase Cloud Functions, issue #842.
// Firebase Cloud Function for Server Side Rendering (SSR).
exports.angularUniversalFunction = functions.https.onRequest(expressApp);

// Firebase Cloud Function for sending e-mail from a contact form.
exports.contactFormFunction = functions.firestore
  .document(process.env.FIRESTORE_COLLECTION + '/{formControlEmail}')
  .onCreate(async (snap, context) => {
    if (snap.data() === null) return null;

    const contactFormData = snap.data();
    console.log('Submitted contact form: ', contactFormData);
    console.log('context: ', context); // This log will be shown in Firebase Functions logs.

    const mailOptions = {
      from: `${contactFormData!.formControlName} <${
        contactFormData!.formControlEmail
      }>`,
      to: 'ditectrev@gmail.com',
      subject: `Contact Form: Thesis App`,
      // Non-null assertion operators are required in .ts as well as .html file to compile into AOT.
      // TODO: Get dial code prefix and transform project deadline date properly.
      // TODO: Show only the filled fields.
      // TODO: Make local time.
      // TODO: Add attachments.
      // TODO: Format "Additional files" when receiving a mail.
      html: `
        <p>Message from a contact form has been send.</p>
        <h3>Message content:</h3>
        <ul>
          <li>Name: ${contactFormData!.formControlName}</li>
          <li>E-mail: ${contactFormData!.formControlEmail}</li>
          <li>Phone: ${contactFormData!.formControlPhone}</li>
          <li>Project deadline: ${new Date(
            contactFormData!.formControlDeadline._seconds * 1000
          )}</li>
          <li>Project description: ${
            contactFormData!.formControlDescription
          }</li>
          <li>Additional files: ${contactFormData!.fileUploader}</li>
          <li>Preferred form of contact: ${
            contactFormData!.formControlContactPreference
          }</li>
          <li>Interested in the following services: ${
            contactFormData!.formControlService
          }</li>
        </ul>
      `
    };

    return mailTransport
      .sendMail(mailOptions)
      .then((info: string) => {
        console.log('Info: ', info);
      })
      .catch((error: string) => {
        return console.log('Error: ', error); // This log will be shown in Firebase Functions logs.
      });
  });
