import { async, TestBed } from '@angular/core/testing';
import { PrivacyAndSecurityLazyModule } from './privacy-and-security.lazy.module';

describe('PrivacyAndSecurityLazyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PrivacyAndSecurityLazyModule]
    }).compileComponents();
  }));

  it('should create privacy and security lazy module (workaround lazy loading)', () => {
    expect(PrivacyAndSecurityLazyModule).toBeDefined();
  });
});