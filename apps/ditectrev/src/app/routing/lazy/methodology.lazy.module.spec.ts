import { async, TestBed } from '@angular/core/testing';
import { MethodologyLazyModule } from './methodology.lazy.module';

describe('MethodologyLazyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MethodologyLazyModule]
    }).compileComponents();
  }));

  it('should create methodology lazy module (workaround lazy loading)', () => {
    expect(MethodologyLazyModule).toBeDefined();
  });
});