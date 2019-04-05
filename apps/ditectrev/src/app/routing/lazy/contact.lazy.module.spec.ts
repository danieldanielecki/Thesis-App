import { async, TestBed } from '@angular/core/testing';
import { ContactLazyModule } from './contact.lazy.module';

describe('ContactLazyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ContactLazyModule]
    }).compileComponents();
  }));

  it('should create contact lazy module (workaround lazy loading)', () => {
    expect(ContactLazyModule).toBeDefined();
  });
});
