// Angular imports.
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeModule } from '@app/home';
import { NxModule } from '@nrwl/nx';
import { RoutingModule } from './routing/app-routing.module';
import { SharedComponentsModule } from '@app/shared-components';
import Agastya from 'agastya';

new Agastya('ditectrev'); // TODO: Check the documentation to make it proper, plus add as an environmental variable.

// TODO: Think about shared/core module if it's needed.
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    NxModule.forRoot(),
    RoutingModule,
    SharedComponentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
