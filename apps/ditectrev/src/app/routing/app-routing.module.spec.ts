import { async, TestBed } from '@angular/core/testing';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {
  GalleryComponent,
  HomeComponent,
  SliderComponent,
  TestimonialsComponent
} from '@libs/home/src/index';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxGalleryModule } from 'ngx-gallery';
import { RoutingModule } from './app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('RoutingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GalleryComponent,
        HomeComponent,
        SliderComponent,
        TestimonialsComponent
      ],
      imports: [
        CarouselModule,
        HttpClientTestingModule,
        NgxGalleryModule,
        RouterTestingModule,
        RoutingModule
      ]
    }).compileComponents();
  }));

  it('should create routing module', () => {
    expect(RoutingModule).toBeDefined();
  });
});

// TODO: Add path unit testing after all routes will be done (incl. footer).
// TODO: Test lazy loading here, and in child modules.
