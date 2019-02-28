import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from './particles/particles-config';

declare let particlesJS: any; // Required to be properly interpreted by TypeScript.

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    particlesJS('particles-js', ParticlesConfig, function() {}); // TODO: function() is not covered in the unit test, check it.
  }
}
