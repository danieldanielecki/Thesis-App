import {
  async,
  TestBed
} from '@angular/core/testing';
import { AboutUsComponentsModule } from './about-us-components.module';

describe('AboutUsComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AboutUsComponentsModule]
    }).compileComponents();
  }));

  it('should create about us components module', () => {
    expect(AboutUsComponentsModule).toBeDefined();
  });
});
