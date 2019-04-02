import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivacyAndSecurityComponent } from './privacy-and-security.component';

describe('PrivacyAndSecurityComponent', () => {
  let component: PrivacyAndSecurityComponent;
  let fixture: ComponentFixture<PrivacyAndSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacyAndSecurityComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyAndSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create privacy and security component', () => {
    expect(component).toBeTruthy();
  });
});
