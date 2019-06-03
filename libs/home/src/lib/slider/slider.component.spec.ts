import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderComponent } from './slider.component';

// TODO: Try to mock the global particlesJS somehow.
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

  it('should create slider', () => {
    expect(component).toBeTruthy();
  });

  it('should have div with ID=particles-js', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div#particles-js')).not.toBeNull();
  });

  it('should call invokeParticles method', () => {
    spyOn(component, 'invokeParticles').and.callThrough();
    component.invokeParticles();
    expect(component.invokeParticles).toHaveBeenCalled();
  });
});
