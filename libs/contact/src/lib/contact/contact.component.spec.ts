import 'hammerjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ErrorStateMatcher,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatOptionModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule,
  ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import { MaterialFileInputModule } from 'ngx-material-file-input';
jest.mock('ng2-tel-input');
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { RouterTestingModule } from '@angular/router/testing';

// TODO: Make unit tests of methods, currently it's problematic.
describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatNativeDateModule,
        MatOptionModule,
        MatRadioModule,
        MatSelectModule,
        MatSlideToggleModule,
        MaterialFileInputModule,
        RecaptchaModule,
        RecaptchaFormsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
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

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create contact component', () => {
    expect(component).toBeTruthy();
  });

  it('should call filterAvailableDays method', () => {
    let date: Date = new Date();
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
    let event: any = null;
    spyOn(component, 'hasError').and.callThrough();
    component.hasError(event);
    expect(component.hasError).toHaveBeenCalled();
  });

  it('should call onSubmit method', () => {
    let form: any = null;
    spyOn(component, 'onSubmit').and.callThrough();
    component.onSubmit(form);
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
