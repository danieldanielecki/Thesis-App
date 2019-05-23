import 'hammerjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { SharedModule } from '@libs/shared/src/index';

// TODO: Make unit tests of methods, currently it's problematic.
describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [
        BrowserAnimationsModule,
        MaterialFileInputModule,
        Ng2TelInputModule,
        RecaptchaModule,
        RecaptchaFormsModule,
        SharedModule
      ]
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

  // Jest uses JSDOM to create browser environment. JSDOM doesn't support window.intlTelInput, so it's required to create it on our own in the tests.
  beforeAll(() => {
    Object.defineProperty(window, 'intlTelInput', {
      value: jest.fn(() => {
        return {
          matches: true
        };
      })
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create contact component', () => {
    expect(component).toBeTruthy();
  });

  it('should call filterAvailableDays method', () => {
    const date: Date = new Date();
    spyOn(component, 'filterAvailableDays').and.callThrough();
    component.filterAvailableDays(date);
    expect(component.filterAvailableDays).toHaveBeenCalled();
  });

  it('should call handleTerms method', () => {
    spyOn(component, 'handleTerms').and.callThrough();
    component.handleTerms();
    expect(component.handleTerms).toHaveBeenCalled();
  });

  it('should call hasError method', () => {
    const event: any = null;
    spyOn(component, 'hasError').and.callThrough();
    component.hasError(event);
    expect(component.hasError).toHaveBeenCalled();
  });

  it('should call onSubmit method', () => {
    const form: any = null;
    spyOn(component, 'onSubmit').and.callThrough();
    component.onSubmit(form);
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
