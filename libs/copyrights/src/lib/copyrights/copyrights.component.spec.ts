import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CopyrightsComponent } from './copyrights.component';

describe('CopyrightsComponent', () => {
  let component: CopyrightsComponent;
  let fixture: ComponentFixture<CopyrightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CopyrightsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyrightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create copyrights component', () => {
    expect(component).toBeTruthy();
  });
});
