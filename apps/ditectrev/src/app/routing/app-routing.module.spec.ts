import { async, TestBed } from '@angular/core/testing';
import { RoutingModule } from './app-routing.module';

describe('RoutingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RoutingModule]
    }).compileComponents();
  }));

  it('should create routing module', () => {
    expect(RoutingModule).toBeDefined();
  });
});

// TODO: Make unit tests working with other errors after adding routing.