import {
  async,
  TestBed
} from '@angular/core/testing';
import { ServicesComponentsModule } from './services-components.module';

describe('ServicesComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ServicesComponentsModule]
    }).compileComponents();
  }));

  it('should create services components', () => {
    expect(ServicesComponentsModule).toBeDefined();
  });
});
