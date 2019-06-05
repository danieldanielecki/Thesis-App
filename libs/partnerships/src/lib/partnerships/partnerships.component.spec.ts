import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PartnershipsComponent } from './partnerships.component';
import { SharedModule } from '@libs/shared/src/index';

describe('PartnershipsComponent', () => {
  let component: PartnershipsComponent;
  let fixture: ComponentFixture<PartnershipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PartnershipsComponent],
      imports: [BrowserAnimationsModule, SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create partnerships component', () => {
    expect(component).toBeTruthy();
  });
});
