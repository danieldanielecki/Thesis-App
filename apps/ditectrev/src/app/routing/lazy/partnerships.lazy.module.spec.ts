import { async, TestBed } from '@angular/core/testing';
import { PartnershipsLazyModule } from './partnerships.lazy.module';

describe('PartnershipsLazyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PartnershipsLazyModule]
    }).compileComponents();
  }));

  it('should create partnerships lazy module (workaround lazy loading)', () => {
    expect(PartnershipsLazyModule).toBeDefined();
  });
});
