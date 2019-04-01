import { async, TestBed } from '@angular/core/testing';
import { MethodologyModule } from './methodology.module';

describe('MethodologyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MethodologyModule]
    }).compileComponents();
  }));

  it('should create methodology module', () => {
    expect(MethodologyModule).toBeDefined();
  });
});
