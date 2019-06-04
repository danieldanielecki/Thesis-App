import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DigitalStrategyComponent } from './digital-strategy.component';
import { SharedModule } from '@libs/shared/src/index';

describe('DigitalStrategyComponent', () => {
  let component: DigitalStrategyComponent;
  let fixture: ComponentFixture<DigitalStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalStrategyComponent],
      imports: [SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create digital strategy component', () => {
    expect(component).toBeTruthy();
  });
});
