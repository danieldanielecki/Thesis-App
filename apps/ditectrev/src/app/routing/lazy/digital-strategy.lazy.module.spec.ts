import { async, TestBed } from '@angular/core/testing';
import { DigitalStrategyLazyModule } from './digital-strategy.lazy.module';

describe('DigitalStrategyLazyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DigitalStrategyLazyModule]
    }).compileComponents();
  }));

  it('should create digital strategy lazy module (workaround lazy loading)', () => {
    expect(DigitalStrategyLazyModule).toBeDefined();
  });
});