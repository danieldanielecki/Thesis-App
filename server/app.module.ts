import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';
import { join } from 'path';
import { Module } from '@nestjs/common';

// Get working directory of client bundle.
// const BROWSER_DIR = join(
//   process.cwd(),
//   'functions',
//   'dist',
//   'apps',
//   'ditectrev-browser'
// ); // Use when testing locally without Firebase Cloud Functions solely on NestJS.
const BROWSER_DIR = join(process.cwd(), 'dist/apps/ditectrev-browser'); // Use when deploying to & testing with Firebase Cloud Functions.

applyDomino(global, join(BROWSER_DIR, 'index2.html')); // Mock document, window etc.

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bundle: require('./../functions/dist/apps/ditectrev-server/main'), // Bundle is created dynamically during build process.
      templatePath: join(BROWSER_DIR, 'index2.html'),
      viewsPath: BROWSER_DIR
    })
  ]
})
export class ApplicationModule {}
