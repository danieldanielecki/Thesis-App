import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
// TODO: providers from UtilitiesModules doesn't work, fix it.
// import { UtilitiesModule } from '@libs/utilities/src/index';

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
    HttpClientJsonpModule
  ]
})
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
