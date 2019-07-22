import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlossaryComponent } from './glossary.component';
import { SharedModule } from '@libs/shared/src/index';

// TODO: Write complete unit test.
describe('GlossaryComponent', () => {
  let component: GlossaryComponent;
  let fixture: ComponentFixture<GlossaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GlossaryComponent],
      imports: [BrowserAnimationsModule, SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create glossary component', () => {
    expect(component).toBeTruthy();
  });
});
