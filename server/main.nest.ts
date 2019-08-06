// TODO: Check handling reporting violations (helmet) & bugs (sentry).
// TODO: Improve typing (cors, helmet, nodemailer, etc.), i.e. all imported by *.

import * as admin from 'firebase-admin';
import * as csurf from 'csurf';
import * as express from 'express';
import * as functions from 'firebase-functions';
import * as helmet from 'helmet';
import * as nodemailer from 'nodemailer';
import * as rateLimit from 'express-rate-limit';
import { AppNestModule } from './app.nest.module';
import { Express } from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';

declare const MAIL_ACCOUNT: string; // Declare mail account secret.
declare const MAIL_HOST: string; // Declare mail host secret.
declare const MAIL_PASSWORD: string; // Declare mail password secret.
declare const MAIL_PORT: number; // Declare mail port secret.

admin.initializeApp(); // Initialize Firebase SDK.

const server: Express = express();

server.use(helmet()); // Enable Helmet's 7 default middleware protections, i.e. dnsPrefetchControl, frameguard, hidePoweredBy, hsts, ieNoOpen, noSniff and xssFilter.

// Content-Security Policy (CSP) rules.
server.use(
  helmet.contentSecurityPolicy({
    browserSniff: false,
    directives: {
      defaultSrc: [
        "'self'",
        'https://agastya-version.oswaldlabs.com',
        'https://fonts.googleapis.com',
        'https://platform.oswaldlabs.com',
        'https://script.hotjar.com',
        'https://static.hotjar.com',
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com'
      ],
      styleSrc: ["'self'", 'https://fonts.googleapis.com'],
      scriptSrc: [
        "'self'",
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com'
      ]
    }
  })
);

server.use(helmet.permittedCrossDomainPolicies()); // Prevent Adobe Flash and Adobe Actobar from loading content.

// Enforce to expect Certificate Transparency (CT) for 24 hours.
server.use(
  helmet.expectCt({
    enforce: true,
    maxAge: 24 * 60 * 60 // In seconds, regard it for max 24 hours.
  })
);

// Limit website features.
server.use(
  helmet.featurePolicy({
    features: {
      fullscreen: ["'self'"],
      payment: ["'none'"],
      syncXhr: ["'none'"]
    }
  })
);

server.use(helmet.noCache()); // Disable client-side caching.
server.use(helmet.referrerPolicy({ policy: 'same-origin' })); // Send Referer header only for pages on the same origin.

server.use(csurf()); // Enable CSRF protection.

server.set('trust proxy', 1); // Enable because the application is behind reverse proxy (Firebase).
server.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // In milliseconds, keep records of requests in memory for 15 minutes.
    max: 100 // Max 100 connecitons can be done before sending HTTP 429 (Too Many Requests) response code.
  })
);

// TODO: Check other Nodemailer options like bcc and others.
const mailTransport = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  auth: {
    user: MAIL_ACCOUNT,
    pass: MAIL_PASSWORD
  }
});

// Create and init Nest server based on Express instance.
const createNestServer = async (expressInstance: Express) => {
  const app = await NestFactory.create(
    AppNestModule,
    new ExpressAdapter(expressInstance)
  );

  app.init(); // Use when deploying to & testing with Firebase Cloud Functions.
  // await app.listen(4300); // Use when testing locally without Firebase Cloud Functions solely on NestJS.

  // Enable CORS.
  app.enableCors({
    origin: true,
    methods: 'POST'
  });
};

createNestServer(server);

// TODO: Add ".region('europe-west1')" all Firebase Cloud Functions, issue #842.
// Firebase Cloud Function for Server Side Rendering (SSR).
exports.angularUniversalFunction = functions.https.onRequest(server); // Export Firebase Cloud Functions to work on

// Firebase Cloud Function for sending e-mail from a contact form.
exports.contactFormFunction = functions.firestore
  .document('messages/{formControlEmail}')
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
      .then(info => {
        console.log('Info: ', info);
      })
      .catch(error => {
        return console.log('Error: ', error); // This log will be shown in Firebase Functions logs.
      });
  });
