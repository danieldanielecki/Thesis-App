import { async, TestBed } from '@angular/core/testing';
import { ToDeleteModule } from './to-delete.module';

describe('ToDeleteModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ToDeleteModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ToDeleteModule).toBeDefined();
  });
});
