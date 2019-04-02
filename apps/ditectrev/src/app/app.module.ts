// Angular modules.
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Main modules.
import { AboutUsModule } from '@app/about-us';
import { ContactModule } from '@app/contact';
import { HomeModule } from '@app/home';
import { MethodologyModule } from '@app/methodology';
import { ServicesModule } from '@app/services';
import { SharedComponentsModule } from '@app/shared-components';

// Services modules.
import { CyberSecurityModule } from '@app/cyber-security';
import { DigitalStrategyModule } from '@app/digital-strategy';
import { SoftwareDevelopmentModule } from '@app/software-development';

// Others.
import Agastya from 'agastya';
import { AppComponent } from './app.component';
import { NotFoundModule } from '@app/not-found';
import { NxModule } from '@nrwl/nx';
import { RoutingModule } from './routing/app-routing.module';

new Agastya('ditectrev'); // TODO: Check the documentation to make it proper, plus add as an environmental variable.

// TODO: Think about shared module if it's needed.
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // Main modules.
    AboutUsModule,
    ContactModule,
    HomeModule,
    MethodologyModule,
    ServicesModule,
    SharedComponentsModule,

    // Services modules.
    CyberSecurityModule,
    DigitalStrategyModule,
    SoftwareDevelopmentModule,

    // Others.
    NotFoundModule,
    NxModule.forRoot(),
    RoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
