import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import Agastya from 'agastya';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

new Agastya('ditectrev');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
