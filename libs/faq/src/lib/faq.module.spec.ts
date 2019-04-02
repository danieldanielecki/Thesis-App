import { async, TestBed } from '@angular/core/testing';
import { FaqModule } from './faq.module';

describe('FaqModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FaqModule]
    }).compileComponents();
  }));

  it('should create faq module', () => {
    expect(FaqModule).toBeDefined();
  });
});
