import { async, TestBed } from '@angular/core/testing';
import { DigitalStrategyModule } from './digital-strategy.module';

describe('DigitalStrategyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DigitalStrategyModule]
    }).compileComponents();
  }));

  it('should create digital strategy module', () => {
    expect(DigitalStrategyModule).toBeDefined();
  });
});
