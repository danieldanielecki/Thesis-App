import * as express from 'express';
import * as functions from 'firebase-functions';
import { AppNestModule } from './app.nest.module';
import { Express } from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';

const server: Express = express();

// Create and init Nest server based on Express instance.
const createNestServer = async (expressInstance: Express) => {
  const app = await NestFactory.create(
    AppNestModule,
    new ExpressAdapter(expressInstance)
  );
  app.init(); // Use when deploying to & testing with Firebase Cloud Functions.
  // app.listen(4300); // Use when testing locally without Firebase Cloud Functions solely on NestJS.
};

createNestServer(server);
exports.angularUniversalFunction = functions.https.onRequest(server); // Export Firebase Cloud Functions to work on
