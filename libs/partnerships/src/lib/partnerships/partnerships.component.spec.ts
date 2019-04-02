import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PartnershipsComponent } from './partnerships.component';

describe('PartnershipsComponent', () => {
  let component: PartnershipsComponent;
  let fixture: ComponentFixture<PartnershipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PartnershipsComponent]
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
