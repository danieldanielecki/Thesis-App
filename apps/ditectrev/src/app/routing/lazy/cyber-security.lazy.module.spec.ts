import { async, TestBed } from '@angular/core/testing';
import { CyberSecurityLazyModule } from './cyber-security.lazy.module';

describe('CyberSecurityLazyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CyberSecurityLazyModule]
    }).compileComponents();
  }));

  it('should create cyber security lazy module (workaround lazy loading)', () => {
    expect(CyberSecurityLazyModule).toBeDefined();
  });
});