import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@libs/shared/src/index';
import { TermsOfUseComponent } from './terms-of-use.component';

describe('TermsOfUseComponent', () => {
  let component: TermsOfUseComponent;
  let fixture: ComponentFixture<TermsOfUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TermsOfUseComponent],
      imports: [SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsOfUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create terms of use component', () => {
    expect(component).toBeTruthy();
  });
});
