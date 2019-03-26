import { async, TestBed } from '@angular/core/testing';
import { CyberSecurityModule } from './cyber-security.module';

describe('CyberSecurityModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CyberSecurityModule]
    }).compileComponents();
  }));

  it('should create cyber security module', () => {
    expect(CyberSecurityModule).toBeDefined();
  });
});
