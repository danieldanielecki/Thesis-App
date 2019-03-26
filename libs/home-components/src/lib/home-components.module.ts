import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [HomeComponent, SliderComponent],
  exports: [SliderComponent]
})
export class HomeComponentsModule {}
