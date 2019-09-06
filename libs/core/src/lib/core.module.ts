import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpClientModule,
  HttpClientJsonpModule,
  HttpClientXsrfModule
} from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    })
  ]
})
// TODO: Make unit test for this.
export class CoreModule {
  // Throw an error once CoreModule will be imported somewhere else in order to prevent from importing it more than once in the whole application.
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        `CoreModule has already been loaded. Import Core modules in the AppModule only.`
      );
    }
  }
}
