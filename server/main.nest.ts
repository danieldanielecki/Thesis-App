import * as admin from 'firebase-admin';
import * as express from 'express';
import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';
import { AppNestModule } from './app.nest.module';
import { Express } from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';

declare const MAIL_ACCOUNT: string; // Declare mail account secret.
declare const MAIL_HOST: string; // Declare mail account secret.
declare const MAIL_PASSWORD: string; // Declare mail password secret.
declare const MAIL_PORT: number; // Declare mail password secret.

admin.initializeApp(); // Initialize Firebase SDK.

// TODO: Check other Nodemailer options like bcc and others.
const server: Express = express();
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
};

createNestServer(server);

// TODO: Add ".region('europe-west1')" all Firebase Cloud Functions, issue #842.
// Firebase Cloud Function for Server Side Rendering (SSR).
exports.angularUniversalFunction = functions.https.onRequest(server); // Export Firebase Cloud Functions to work on

// Firebase Cloud Function for sending e-mail from a contact form.
exports.sendMessage = functions.firestore
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
