import { async, TestBed } from '@angular/core/testing';
import { GlossaryLazyModule } from './glossary.lazy.module';

describe('GlossaryLazyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GlossaryLazyModule]
    }).compileComponents();
  }));

  it('should create glossary lazy module (workaround lazy loading)', () => {
    expect(GlossaryLazyModule).toBeDefined();
  });
});
