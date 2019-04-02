// Angular imports.
import { async, TestBed } from '@angular/core/testing';
import { RoutingModule } from './app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';

// Application components imports.
import { AboutUsComponent } from '@app/about-us-component';
import { ContactComponent } from '@app/contact-component';
import { CopyrightsComponent } from '@app/copyrights-component';
import { CyberSecurityComponent } from '@app/cyber-security-component';
import { DigitalStrategyComponent } from '@app/digital-strategy-component';
import { FaqComponent } from '@app/faq-component';
import { GlossaryComponent } from '@app/glossary-component';
import { HomeComponent } from '@app/home-component';
import { MethodologyComponent } from '@app/methodology-component';
import { NotFoundComponent } from '@app/not-found-component';
import { PartnershipsComponent } from '@app/partnerships-component';
import { PrivacyAndSecurityComponent } from '@app/privacy-and-security-component';
import { ServicesComponent } from '@app/services-component';
import { SitemapComponent } from '@app/sitemap-component';
import { SliderComponent } from '@app/slider-component';
import { SoftwareDevelopmentComponent } from '@app/software-development-component';
import { TermsOfUseComponent } from '@app/terms-of-use-component';

// Other imports.
import { SharedComponentsModule } from '@app/shared-components';

describe('RoutingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutUsComponent,
        ContactComponent,
        CopyrightsComponent,
        CyberSecurityComponent,
        DigitalStrategyComponent,
        FaqComponent,
        GlossaryComponent,
        HomeComponent,
        MethodologyComponent,
        NotFoundComponent,
        PartnershipsComponent,
        PrivacyAndSecurityComponent,
        ServicesComponent,
        SitemapComponent,
        SliderComponent,
        SoftwareDevelopmentComponent,
        TermsOfUseComponent
      ],
      imports: [RouterTestingModule, RoutingModule, SharedComponentsModule]
    }).compileComponents();
  }));

  it('should create routing module', () => {
    expect(RoutingModule).toBeDefined();
  });
});

// TODO: add path unit testing after all routes will be done (incl. footer).
