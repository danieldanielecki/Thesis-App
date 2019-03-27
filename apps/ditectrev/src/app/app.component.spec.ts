import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SharedComponentsModule } from '@app/shared-components';
import { HomeModule } from '@app/home';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [SharedComponentsModule, HomeModule]
    }).compileComponents();
  }));

  // Jest uses JSDOM to create browser environment. JSDOM doesn't support window.matchMedia, so it's required to create it on our own in the tests.
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => {
        return {
          matches: true
        };
      })
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should have header component', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-header')).not.toBeNull();
  }));

  it('should have footer component', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-footer')).not.toBeNull();
  }));
});
