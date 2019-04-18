import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeModule } from '@libs/home/src/index';
import { SharedComponentsModule } from '@libs/shared-components/src/index';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HomeModule, RouterTestingModule, SharedComponentsModule]
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

  it('should create app', () => {
    expect(app).toBeTruthy();
  });

  it('should have header component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-header')).not.toBeNull();
  });

  it('should have footer component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-footer')).not.toBeNull();
  });
});
