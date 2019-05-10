import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [HomeComponent, SliderComponent],
  exports: [SliderComponent]
})
export class HomeModule {}
