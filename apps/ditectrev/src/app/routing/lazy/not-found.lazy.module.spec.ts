import { async, TestBed } from '@angular/core/testing';
import { NotFoundLazyModule } from './not-found.lazy.module';

describe('NotFoundLazyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NotFoundLazyModule]
    }).compileComponents();
  }));

  it('should create not found lazy module (workaround lazy loading)', () => {
    expect(NotFoundLazyModule).toBeDefined();
  });
});