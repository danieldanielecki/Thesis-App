import { 
  async, 
  ComponentFixture, 
  TestBed } 
from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SharedComponentsModule } from '@thesisapp/shared-components';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [SharedComponentsModule]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have header component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('thesisapp-header')).not.toBeNull();
  }));
});
