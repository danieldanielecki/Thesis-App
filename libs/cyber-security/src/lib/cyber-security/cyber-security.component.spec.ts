import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CyberSecurityComponent } from './cyber-security.component';

describe('CyberSecurityComponent', () => {
  let component: CyberSecurityComponent;
  let fixture: ComponentFixture<CyberSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CyberSecurityComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create cyber security component', () => {
    expect(component).toBeTruthy();
  });
});
