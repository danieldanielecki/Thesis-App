import { async, TestBed } from '@angular/core/testing';
import { PartnershipsModule } from './partnerships.module';

describe('PartnershipsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PartnershipsModule]
    }).compileComponents();
  }));

  it('should create partnerships module', () => {
    expect(PartnershipsModule).toBeDefined();
  });
});
