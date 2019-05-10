import { AboutUsModule } from './about-us.module';
import { async, TestBed } from '@angular/core/testing';

describe('AboutUsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AboutUsModule]
    }).compileComponents();
  }));

  it('should create about us module', () => {
    expect(AboutUsModule).toBeDefined();
  });
});
