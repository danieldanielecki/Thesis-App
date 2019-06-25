declare const AGASTYA_API_KEY: string; // Declare Agastya API key secret.

import Agastya from 'agastya';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { CoreModule } from './../../../../libs/core/src/index';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { HomeModule } from './../../../../libs/home/src/index';
import { NgModule } from '@angular/core';
import { NxModule } from '@nrwl/nx';
import { RoutingModule } from './routing/app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { SharedModule } from './../../../../libs/shared/src/index';

new Agastya(AGASTYA_API_KEY); // TODO: Check the documentation to make it proper.

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CoreModule,
    HomeModule,
    NxModule.forRoot(),
    RoutingModule,
    SharedModule, // TODO: Check if shared modules shouldn't be loaded only in feature modules. Problem is how to fix footer/header to be available - put it to core?
    ServiceWorkerModule.register('ngsw-worker.js')
  ]
})
export class AppModule {}
