import {
  async,
  TestBed
} from '@angular/core/testing';
import { ContactComponentsModule } from './contact-components.module';

describe('ContactComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ContactComponentsModule]
    }).compileComponents();
  }));

  it('should create contact components module', () => {
    expect(ContactComponentsModule).toBeDefined();
  });
});
