const domino = require('domino');
const fs = require('fs');
const path = require('path');
const template = fs
  .readFileSync(
    path.join(
      __dirname,
      '.',
      '..',
      '..',
      '..',
      'dist',
      'apps',
      'ditectrev-browser',
      'index.html'
    )
  )
  .toString();
const win = domino.createWindow(template);
global['window'] = win;
global['document'] = win.document;

import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
