import { 
  async, 
  ComponentFixture, 
  TestBed } 
from '@angular/core/testing';

import { SliderComponent } from './slider.component';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the slider', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should have particles div', async(() => {
    const figure = TestBed.createComponent(SliderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div#particles-js')).not.toBeNull();
  }));
});
