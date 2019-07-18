// TODO: Check all config files like with tsconfig's.
// TODO: Make everything alphabetically.
// TODO: Check in terms of AOT is the methods really must be public (almost) everywhere in components.
// TODO: Add Animate on Scroll in many places.
// TODO: Check TSLint options.
// TODO: Check compiler options.
// TODO: Unify all imports, remove "./".
// TODO: Check angular.json and all compiling options.

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

declare const AGASTYA_API_KEY: string; // Declare Agastya API key secret.
new Agastya(AGASTYA_API_KEY); // TODO: Check the documentation to make it proper.

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ditectrevSSR' }), // Unique name across the application. However, some names (e.g. ditectrev.com) causes loosing of defined in component styles.
    CoreModule,
    HomeModule,
    NxModule.forRoot(),
    RoutingModule,
    SharedModule, // TODO: Check if shared modules shouldn't be loaded only in feature modules. Problem is how to fix footer/header to be available - put it to core?
    ServiceWorkerModule.register('ngsw-worker.js')
  ]
})
export class AppModule {}
