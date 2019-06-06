import { async, TestBed } from '@angular/core/testing';
import { ErrorsMatcherService } from './errors-matcher.service';

// TODO: Improve code coverage.
describe('ErrorMatcherService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ErrorsMatcherService]
    }).compileComponents();
  }));

  it('should be created errors matcher service', () => {
    const service: ErrorsMatcherService = TestBed.get(ErrorsMatcherService);
    expect(service).toBeTruthy();
  });
});
