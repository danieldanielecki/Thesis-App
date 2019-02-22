import { Component, OnInit } from '@angular/core';
import * as particlesJS from 'particles.js';
import { ParticlesConfig } from './particles/particles-config';

declare var particlesJS: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    particlesJS('particles-js', ParticlesConfig, function() {
      // console.log('Callback - particles.js config loaded.');
    });
  }
}
