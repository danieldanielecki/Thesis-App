import { async, TestBed } from '@angular/core/testing';
import { TermsOfUseModule } from './terms-of-use.module';

describe('TermsOfUseModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TermsOfUseModule]
    }).compileComponents();
  }));

  it('should create terms of use module', () => {
    expect(TermsOfUseModule).toBeDefined();
  });
});
