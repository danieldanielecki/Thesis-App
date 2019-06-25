import 'hammerjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MethodologyComponent } from './methodology.component';
import { SharedModule } from '@libs/shared/src/index';

describe('MethodologyComponent', () => {
  let component: MethodologyComponent;
  let fixture: ComponentFixture<MethodologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MethodologyComponent],
      imports: [BrowserAnimationsModule, SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create methodology component', () => {
    expect(component).toBeTruthy();
  });
});
