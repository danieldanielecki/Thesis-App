import { async, TestBed } from '@angular/core/testing';
import { AboutUsLazyModule } from './about-us.lazy.module';

describe('AboutUsLazyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AboutUsLazyModule]
    }).compileComponents();
  }));

  it('should create about us lazy module (workaround lazy loading)', () => {
    expect(AboutUsLazyModule).toBeDefined();
  });
});
