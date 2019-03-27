import { async, TestBed } from '@angular/core/testing';
import { RoutingModule } from './app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedComponentsModule } from '@app/shared-components';

// Main components.
import { AboutUsComponent } from '@app/about-us-component';
import { ContactComponent } from '@app/contact-component';
import { HomeComponent } from '@app/home-component';
import { MethodologyComponent } from '@app/methodology-component';
import { ServicesComponent } from '@app/services-component';

// Services components.
import { CyberSecurityComponent } from '@app/cyber-security-component';
import { DigitalStrategyComponent } from '@app/digital-strategy-component';
import { SoftwareDevelopmentComponent } from '@app/software-development-component';
import { SliderComponent } from '@app/slider-component';

describe('RoutingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        // Main components.
        AboutUsComponent,
        ContactComponent,
        HomeComponent,
        MethodologyComponent,
        ServicesComponent,
        SliderComponent,

        // Services components.
        CyberSecurityComponent,
        DigitalStrategyComponent,
        SoftwareDevelopmentComponent
      ],
      imports: [RouterTestingModule, RoutingModule]
    }).compileComponents();
  }));

  it('should create routing module', () => {
    expect(RoutingModule).toBeDefined();
  });
});

// TODO: Make unit tests working with other errors after adding routing.