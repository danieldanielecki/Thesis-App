import { async, TestBed } from '@angular/core/testing';
import { SoftwareDevelopmentLazyModule } from './software-development.lazy.module';

describe('SoftwareDevelopmentLazyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SoftwareDevelopmentLazyModule]
    }).compileComponents();
  }));

  it('should create software development lazy module (workaround lazy loading)', () => {
    expect(SoftwareDevelopmentLazyModule).toBeDefined();
  });
});