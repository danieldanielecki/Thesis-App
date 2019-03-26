// Angular modules.
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Main modules.
import { AboutUsComponentsModule } from '@app/about-us-components';
import { ContactComponentsModule } from '@app/contact-components';
import { HomeComponentsModule } from '@app/home-components';
import { MethodologyComponentsModule } from '@app/methodology-components';
import { ServicesComponentsModule } from '@app/services-components';
import { SharedComponentsModule } from '@app/shared-components';

// Services modules.
import { CyberSecurityModule } from '@app/cyber-security';
import { DigitalStrategyModule } from '@app/digital-strategy';
import { SoftwareDevelopmentModule } from '@app/software-development';

// Others.
import Agastya from 'agastya';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RoutingModule } from './routing/app-routing.module';

new Agastya('ditectrev');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // Main modules.
    AboutUsComponentsModule,
    ContactComponentsModule,
    HomeComponentsModule,
    MethodologyComponentsModule,
    ServicesComponentsModule,
    SharedComponentsModule,

    // Services modules.
    CyberSecurityModule,
    DigitalStrategyModule,
    SoftwareDevelopmentModule,

    // Others.
    NxModule.forRoot(),
    RoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
