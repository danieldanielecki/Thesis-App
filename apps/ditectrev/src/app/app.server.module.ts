import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader'; // For lazy loading on SSR.
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

// TODO: Flexbox isn't working on SSR.
@NgModule({
  imports: [
    AppModule,
    FlexLayoutServerModule,
    ModuleMapLoaderModule,
    ServerModule
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
