import { async, TestBed } from '@angular/core/testing';
import { AboutUsModule } from './about-us.module';

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
