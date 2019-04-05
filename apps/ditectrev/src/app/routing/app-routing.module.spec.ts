import { async, TestBed } from '@angular/core/testing';
import { RoutingModule } from './app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent, SliderComponent } from '@libs/home/src/index';

describe('RoutingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, SliderComponent],
      imports: [RouterTestingModule, RoutingModule]
    }).compileComponents();
  }));

  it('should create routing module', () => {
    expect(RoutingModule).toBeDefined();
  });
});

// TODO: Add path unit testing after all routes will be done (incl. footer).
// TODO: Test lazy loading here, and in child modules.