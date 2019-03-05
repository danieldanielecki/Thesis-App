import {
  async,
  TestBed
} from '@angular/core/testing';
import { MethodologyComponentsModule } from './methodology-components.module';

describe('MethodologyComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MethodologyComponentsModule]
    }).compileComponents();
  }));

  it('should create methodology components module', () => {
    expect(MethodologyComponentsModule).toBeDefined();
  });
});
