import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { SliderComponent } from './../slider/slider.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, SliderComponent]
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
});
