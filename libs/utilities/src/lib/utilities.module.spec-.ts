import { async, TestBed } from '@angular/core/testing';
import { UtilitiesModule } from './utilities.module';

// TODO: Fix this test and bring it back by removing "-" from name of the file.
describe('UtilitiesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UtilitiesModule]
    }).compileComponents();
  }));

  it('should create utilities module', () => {
    expect(UtilitiesModule).toBeDefined();
  });
});
