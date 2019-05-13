import Agastya from 'agastya'; // TODO: Check for new version of Agastya to fix Night & Dyslexia modes (submitted issue).
import { AppComponent } from './app.component';
import { CoreModule } from '@libs/core/src/index';
import { HomeModule } from '@libs/home/src/index';
import { NgModule } from '@angular/core';
import { NxModule } from '@nrwl/nx';
import { RoutingModule } from './routing/app-routing.module';
import { SharedModule } from '@libs/shared/src/index';

new Agastya('ditectrev'); // TODO: Check the documentation to make it proper, plus add as an environmental variable.

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    CoreModule,
    HomeModule,
    NxModule.forRoot(),
    RoutingModule,
    SharedModule // TODO: Check if shared modules shouldn't be loaded only in feature modules. Problem is how to fix footer/header to be available - put it to core?
  ]
})
export class AppModule {}
