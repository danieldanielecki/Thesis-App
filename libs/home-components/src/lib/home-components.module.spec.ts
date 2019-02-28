import { 
  async, 
  TestBed 
} from '@angular/core/testing';
import { HomeComponentsModule } from './home-components.module';

describe('HomeComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponentsModule]
    }).compileComponents();
  }));

  it('should create home components module', async(() => {
    expect(HomeComponentsModule).toBeTruthy();
  }));
});
