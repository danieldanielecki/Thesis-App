import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CyberSecurityComponent } from './cyber-security.component';
import { SharedModule } from '@libs/shared/src/index';

describe('CyberSecurityComponent', () => {
  let component: CyberSecurityComponent;
  let fixture: ComponentFixture<CyberSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CyberSecurityComponent],
      imports: [SharedModule]
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
