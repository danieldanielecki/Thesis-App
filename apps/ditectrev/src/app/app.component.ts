import { Component, OnInit } from '@angular/core';
import * as particlesJS from 'particles.js';
// import Typed from 'typed.js'; // TODO: Check if it'll be not used, e.g. to speed up particles.
import { ParticlesConfig } from './../assets/particlesjs-config';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // TODO: Think to move it to the libs folder.
    particlesJS('particles-js', ParticlesConfig, function() {
      console.log('Callback - particles.js config loaded.'); // TODO: Check why this doesn't log.
    });
  }
}
