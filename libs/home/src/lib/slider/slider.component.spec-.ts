import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderComponent } from './slider.component';

// TODO: Fix this test and bring it back by removing "-" from name of the file.
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

  // TODO: Add partcilesJS() call.
});
