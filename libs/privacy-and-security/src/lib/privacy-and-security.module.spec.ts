import { async, TestBed } from '@angular/core/testing';
import { PrivacyAndSecurityModule } from './privacy-and-security.module';

describe('PrivacyAndSecurityModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PrivacyAndSecurityModule]
    }).compileComponents();
  }));

  it('should create privacy and security module', () => {
    expect(PrivacyAndSecurityModule).toBeDefined();
  });
});
