require('zone.js/dist/zone-node');

const domino = require('domino');
const express = require('express');
const functions = require('firebase-functions');
const fs = require('fs');
const path = require('path');
const {
  AppServerModuleNgFactory
} = require('./../dist/apps/ditectrev-server/main');
const { enableProdMode } = require('@angular/core');
const { renderModuleFactory } = require('@angular/platform-server');

enableProdMode();

const template = fs
  .readFileSync(
    path.join(
      __dirname,
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

// Get "index.html".
const index = require('fs')
  .readFileSync(
    path.resolve(__dirname, './../dist/apps/ditectrev-browser/index.html'),
    'utf8'
  )
  .toString();

let app = express();

// Generate .html file that is send as a response with "url" and "document" parameters.
app.get('**', function(req, res) {
  renderModuleFactory(AppServerModuleNgFactory, {
    url: req.path, // Determine which route of the app render.
    document: index // Full HTML document, in this case "index.html".
  }).then(html => res.status(200).send(html));
});

exports.angularUniversalFunction = functions.https.onRequest(app);
