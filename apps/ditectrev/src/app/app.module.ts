import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NxModule } from '@nrwl/nx';
import { HomeModule } from '@libs/home/src/index';
import { RoutingModule } from './routing/app-routing.module';
import { SharedComponentsModule } from '@libs/shared-components/src/index';
import { AppComponent } from './app.component';
import Agastya from 'agastya'; // TODO: Check for new version of Agastya to fix Night & Dyslexia modes (submitted issue).

new Agastya('ditectrev'); // TODO: Check the documentation to make it proper, plus add as an environmental variable.

// TODO: It might change if SharedModule, FeatureModule, CoreModule, UtilityModule will be implemented.
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    HomeModule,
    RoutingModule,
    SharedComponentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
