import { AboutUsComponent } from './about-us.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SharedModule } from '@libs/shared/src/index';

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
