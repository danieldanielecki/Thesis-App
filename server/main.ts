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

// TODO: Check other Nodemailer options like attachments, bcc and others.
const mailTransport = nodemailer.createTransport({
  // Make sure the environmental variables have proper typings.
  host: String(process.env.MAIL_HOST),
  port: Number(process.env.MAIL_PORT),
  auth: {
    user: String(process.env.MAIL_ACCOUNT),
    pass: String(process.env.MAIL_PASSWORD)
  }
});

// Create and init NestJS application based on Express instance.
(async () => {
  expressApp.use(logger('dev')); // Use logging.
  expressApp.use(helmet()); // Enable Helmet's 7 default middleware protections, i.e. dnsPrefetchControl, frameguard, hidePoweredBy, hsts, ieNoOpen, noSniff and xssFilter.

  // Preload HTTP Strict Transport Security (HSTS).
  expressApp.use(
    helmet.hsts({
      includeSubDomains: true, // Must be enabled, so "preload" will work.
      maxAge: 31536000, // In seconds, one year.
      preload: true
    })
  );

  expressApp.use(
    helmet.contentSecurityPolicy({
      browserSniff: false, // Disable browser sniffing.
      directives: {
        baseUri: ["'self'"], // Restricts use of the "<base>" tag to origin (without subdomains). This directive doesn't use "default-src" as fallback, thus by default it allows anything.
        blockAllMixedContent: true, // Prevent loading any assets using HTTP when the page is loaded using HTTPS.
        childSrc: [
          "'self'", // Default policy for valid sources for web workers and nested browsing contexts loaded using elements such as "<frame>" and "<iframe>": allow all content coming from origin (without subdomains).
          'https://vars.hotjar.com' // Hotjar.
        ],
        connectSrc: [
          "'self'", // Default policy for restricting the URLs which can be loaded using script interfaces: allow all content coming from origin (without subdomains).
          'https://agastya-version.oswaldlabs.com', // Agastya.
          'https://firebasestorage.googleapis.com', // Cloud Storage for Firebase.
          'https://firestore.googleapis.com', // Cloud Firestore.
          'https://platform-beta.oswaldlabs.com', // Agastya.
          'https://www.google-analytics.com', // Universal Analytics (Google Analytics).
          'https://*.hotjar.com:*', // Hotjar.
          'https://vc.hotjar.io:*', // Hotjar.
          'wss://*.hotjar.com' // Hotjar.
        ],
        defaultSrc: [
          "'none'" // Default policy for fallback for the other CSP fetch directives [Link of these: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/default-src]: disallows everything.
        ],
        fontSrc: [
          "'self'", // Default policy for specifiying valid sources for fonts loaded using "@font-face": allow all content coming from origin (without subdomains).
          'https://fonts.gstatic.com', // Google Fonts.
          'http://script.hotjar.com', // Hotjar.
          'https://script.hotjar.com' // Hotjar.
        ],
        formAction: ["'self'"], // Default policy for restricting the URLs which can be used as the target of a form submissions from a given context: allow all content coming from origin (without subdomains). This directive doesn't use "default-src" as fallback, thus by default it allows anything.
        frameAncestors: ["'self'"], // Default policy for specyfing valid parents that may embed a page using "<frame>", "<iframe>", "<object>", "<embed>", or "<applet>". This directive doesn't use "default-src" as fallback, thus by default it allows anything. This is basically clickjacking protection.
        frameSrc: [
          "'self'", // Default policy for specyfing valid sources for nested browsing contexts loading using elements such as "<frame>" and "<iframe>": allow all content coming from origin (without subdomains).
          'https://agastya-version.oswaldlabs.com', // Agastya.
          'https://vars.hotjar.com', // Hotjar.
          'https://www.google.com' // reCAPTCHA.
        ],
        imgSrc: [
          "'self'", // Default policy for specyfing valid sources of images and favicons: allow all content coming from origin (without subdomains).
          'https://www.google-analytics.com', // Universal Analytics (Google Analytics).
          'https://www.googletagmanager.com', // Google Tag Manager.
          'https://www.google.com', // reCAPTCHA.
          'https://script.hotjar.com', // Hotjar.
          'http://script.hotjar.com' // Hotjar.
        ],
        manifestSrc: ["'self'"], // Default policy for specyfing which manifest can be applied to the resource: allow all content coming from origin (without subdomains).
        pluginTypes: ["'none'"], // Default policy for set of plugins that can be embedded into a document: disallow everything. This directive doesn't use "default-src" as fallback, thus by default it allows anything.
        scriptSrc: [
          "'self'", // Default policy for valid sources for JavaScript: allow all content coming from origin (without subdomains).
          "'unsafe-eval'", // Unsecure, but required due to Angular's SSR.
          'https://agastya-version.oswaldlabs.com', // Agastya.
          'https://ditectrev.us15.list-manage.com', // MailChimp.
          'https://platform.oswaldlabs.com', // Agastya.
          'https://platform-beta.oswaldlabs.com', // Agastya.
          'https://script.hotjar.com', // Hotjar.
          'https://static.hotjar.com', // Hotjar.
          'https://ssl.google-analytics.com', // Universal Analytics (Google Analytics).
          'https://www.google-analytics.com', // Universal Analytics (Google Analytics).
          'https://www.googletagmanager.com', // Google Tag Manager.
          'https://www.google.com', // reCAPTCHA.
          'https://www.gstatic.com' // reCAPTCHA.
        ],
        styleSrc: [
          "'self'", // Default policy for valid sources for stylesheets: allow all content coming from origin (without subdomains).
          "'unsafe-inline'", // Unsecure, but required in order to render styles generated by Angular compiler, which on SSR are generated as inline styles.
          'https://fonts.googleapis.com' // Google Fonts.
        ],
        upgradeInsecureRequests: true // Block loading of active/passive content over insecure FTP/HTTP by "upgrading" the connection to secure SFTP/HTTPS.
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
      // TODO: Add cookies prefix.
      cookie: {
        maxAge: 3600000, // In milliseconds, keep the session for maximum 1 hour and later expire it. Cookie by default (in the csrf package) has the same expiration date.
        secure: true, // Enforce cookies has to be transmitted only through HTTPS. It prevents cookie from being transmitted through insecure HTTP.
        sameSite: true, // Mitigate risk of cross-origin information leakage. Robust refence against CSRF, mitigate XSSI too.
        signed: true // Sign a cookie to prevent from cookie forging.
      },
      name: 'SESSION_ID', // Change default name of session cookie which reveals application's internal technology. For Express apps this is "connect.sid".
      resave: false, // Disable forcing session to be saved back to the sessions store, even if the session was never modified during the request. Enabling it could potentially create race conditions where client makes 2 parallels requests to the server.
      saveUninitialized: true, // Save uninitialized session to the store.
      secret: String(process.env.SESSION_SECRET) // Make sure the environmental variable is a string.
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
  .document(
    String(process.env.FIRESTORE_COLLECTION_FILES) + '/{formControlEmail}'
  ) // Make sure the environmental variable is a string.
  .onCreate(async (snap: any, context: any) => {
    if (snap.data() === null) return null;

    const contactFormData = snap.data();
    console.log('Submitted contact form: ', contactFormData);
    console.log('context: ', context); // This log will be shown in Firebase Functions logs.

    const mailOptions = {
      from: `${contactFormData.formControlName} <${
        contactFormData.formControlEmail
      }>`,
      to: 'ditectrev@gmail.com',
      subject: `Contact Form: Thesis App`,
      // TODO: Get dial code prefix and transform project deadline date properly.
      // TODO: Show only the filled fields.
      // TODO: Make local time.
      // TODO: Add attachments.
      // TODO: Format "Additional files" when receiving a mail.
      html: `
        <p>Message from a contact form has been send.</p>
        <h3>Message content:</h3>
        <ul>
          <li>Name: ${contactFormData.formControlName}</li>
          <li>E-mail: ${contactFormData.formControlEmail}</li>
          <li>Phone: ${contactFormData.formControlPhone}</li>
          <li>Project deadline: ${new Date(
            contactFormData.formControlDeadline._seconds * 1000
          )}</li>
          <li>Project description: ${
            contactFormData.formControlDescription
          }</li>
          <li>Additional files: ${contactFormData.fileUploader}</li>
          <li>Preferred form of contact: ${
            contactFormData.formControlContactPreference
          }</li>
          <li>Interested in the following services: ${
            contactFormData.formControlService
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
