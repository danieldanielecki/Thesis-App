import { async, TestBed } from '@angular/core/testing';
import { TermsOfUseLazyModule } from './terms-of-use.lazy.module';

describe('TermsOfUseLazyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TermsOfUseLazyModule]
    }).compileComponents();
  }));

  it('should create terms of use lazy module (workaround lazy loading)', () => {
    expect(TermsOfUseLazyModule).toBeDefined();
  });
});