import { async, TestBed } from '@angular/core/testing';
import { CopyrightsModule } from './copyrights.module';

describe('CopyrightsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CopyrightsModule]
    }).compileComponents();
  }));

  it('should create copyrights module', () => {
    expect(CopyrightsModule).toBeDefined();
  });
});
