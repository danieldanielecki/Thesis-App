import { AboutUsComponent } from './about-us.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SharedModule } from '@libs/shared/src/index';

jest.mock('ng-circle-progress'); // Mock ng-circle-progress module.

// TODO: Don't know why it throws an error with importing NgCircleProgressModule as a module (which it actually is). Fix it.
// TODO: Fix this test and bring it back by removing "-" from name of the file.
describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsComponent],
      imports: [NgCircleProgressModule.forRoot({}), SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create about us component', () => {
    expect(component).toBeTruthy();
  });
});
