import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';

jest.mock('three'); // Mock Three.js module.

// TODO: Improve the code coverage.

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create not found component', () => {
    expect(component).toBeTruthy();
  });
});
