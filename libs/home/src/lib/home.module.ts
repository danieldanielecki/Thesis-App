import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@libs/shared/src/index';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [GalleryComponent, HomeComponent, SliderComponent],
  exports: [GalleryComponent, SliderComponent],
  imports: [SharedModule]
})
export class HomeModule {}
