import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponentsModule } from '@app/shared-components';
import { HomeComponentsModule } from '@app/home-components';
import Agastya from 'agastya';

new Agastya('ditectrev');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    SharedComponentsModule,
    HomeComponentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
