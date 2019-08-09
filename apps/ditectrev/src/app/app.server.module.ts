import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

// TODO: Relative paths aren't working on SSR, issue #164.
@NgModule({
  bootstrap: [AppComponent],
  imports: [
    AppModule,
    FlexLayoutServerModule,
    ModuleMapLoaderModule, // For lazy loading on SSR.
    ServerModule
  ]
})
export class AppServerModule {}
