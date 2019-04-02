import { async, TestBed } from '@angular/core/testing';
import { GlossaryModule } from './glossary.module';

describe('GlossaryModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GlossaryModule]
    }).compileComponents();
  }));

  it('should create glossary module', () => {
    expect(GlossaryModule).toBeDefined();
  });
});
