import { async, TestBed } from '@angular/core/testing';
import { FaqLazyModule } from './faq.lazy.module';

describe('FaqLazyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FaqLazyModule]
    }).compileComponents();
  }));

  it('should create faq lazy module (workaround lazy loading)', () => {
    expect(FaqLazyModule).toBeDefined();
  });
});
