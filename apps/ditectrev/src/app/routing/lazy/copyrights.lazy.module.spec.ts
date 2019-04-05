import { async, TestBed } from '@angular/core/testing';
import { CopyrightsLazyModule } from './copyrights.lazy.module';

describe('CopyrightsLazyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CopyrightsLazyModule]
    }).compileComponents();
  }));

  it('should create copyrights lazy module (workaround lazy loading)', () => {
    expect(CopyrightsLazyModule).toBeDefined();
  });
});