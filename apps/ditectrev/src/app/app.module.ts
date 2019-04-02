// Angular imports.
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Application modules imports.
import { AboutUsModule } from '@app/about-us';
import { ContactModule } from '@app/contact';
import { CopyrightsModule } from '@app/copyrights';
import { CyberSecurityModule } from '@app/cyber-security';
import { DigitalStrategyModule } from '@app/digital-strategy';
import { FaqModule } from '@app/faq';
import { GlossaryModule } from '@app/glossary';
import { HomeModule } from '@app/home';
import { MethodologyModule } from '@app/methodology';
import { NotFoundModule } from '@app/not-found';
import { PartnershipsModule } from '@app/partnerships';
import { PrivacyAndSecurityModule } from '@app/privacy-and-security';
import { RoutingModule } from './routing/app-routing.module';
import { ServicesModule } from '@app/services';
import { SharedComponentsModule } from '@app/shared-components';
import { SitemapModule } from '@app/sitemap';
import { SoftwareDevelopmentModule } from '@app/software-development';
import { TermsOfUseModule } from '@app/terms-of-use';

// Other imports.
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import Agastya from 'agastya';

new Agastya('ditectrev'); // TODO: Check the documentation to make it proper, plus add as an environmental variable.

// TODO: Think about shared/core module if it's needed.
@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular modules.
    BrowserModule,
    BrowserAnimationsModule,

    // Application modules.
    AboutUsModule,
    ContactModule,
    CopyrightsModule,
    CyberSecurityModule,
    DigitalStrategyModule,
    FaqModule,
    GlossaryModule,
    HomeModule,
    MethodologyModule,
    NotFoundModule,
    PartnershipsModule,
    PrivacyAndSecurityModule,
    RoutingModule,
    ServicesModule,
    SharedComponentsModule,
    SitemapModule,
    SoftwareDevelopmentModule,
    TermsOfUseModule,

    // Others.
    NxModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
