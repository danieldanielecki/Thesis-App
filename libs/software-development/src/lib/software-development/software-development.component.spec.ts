import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@libs/shared/src/index';
import { SoftwareDevelopmentComponent } from './software-development.component';

describe('SoftwareDevelopmentComponent', () => {
  let component: SoftwareDevelopmentComponent;
  let fixture: ComponentFixture<SoftwareDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SoftwareDevelopmentComponent],
      imports: [SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create software development component', () => {
    expect(component).toBeTruthy();
  });
});
