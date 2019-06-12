import 'hammerjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GalleryComponent } from './../gallery/gallery.component';
import { HomeComponent } from './home.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { RouterTestingModule } from '@angular/router/testing';
import { SliderComponent } from './../slider/slider.component';
import { TestimonialsComponent } from './../testimonials/testimonials.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GalleryComponent,
        HomeComponent,
        SliderComponent,
        TestimonialsComponent
      ],
      imports: [
        BrowserAnimationsModule,
        CarouselModule,
        NgxGalleryModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create home component', () => {
    expect(component).toBeTruthy();
  });

  it('should have slider component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-slider')).not.toBeNull();
  });

  it('should have gallery component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-gallery')).not.toBeNull();
  });

  it('should have testimonials component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-testimonials')).not.toBeNull();
  });
});
