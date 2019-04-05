import { async, TestBed } from '@angular/core/testing';
import { ServicesLazyModule } from './services.lazy.module';

describe('ServicesLazyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ServicesLazyModule]
    }).compileComponents();
  }));

  it('should create services lazy module (workaround lazy loading)', () => {
    expect(ServicesLazyModule).toBeDefined();
  });
});