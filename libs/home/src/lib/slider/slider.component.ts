import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from './particles/particles-config';

declare let particlesJS: any; // Required to be properly interpreted by TypeScript.

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  public ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }
}
