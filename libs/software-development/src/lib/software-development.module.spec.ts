import { async, TestBed } from '@angular/core/testing';
import { SoftwareDevelopmentModule } from './software-development.module';

describe('SoftwareDevelopmentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SoftwareDevelopmentModule]
    }).compileComponents();
  }));

  it('should create software development module', () => {
    expect(SoftwareDevelopmentModule).toBeDefined();
  });
});
