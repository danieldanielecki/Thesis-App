import { Component } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FileValidator } from 'ngx-material-file-input';
import {
  FormBuilder,
  FormControl,
  FormGroupDirective,
  Validators,
  NgForm
} from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

// TODO: Add verbose datepicker with custom formats.
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public acceptedTerms: boolean = false;
  public contactForm: FormBuilder;
  public currentDate: Date = new Date();
  public maxSize: number = 20971520;
  public servicesItems: string[] = [
    'Cyber Security',
    'Digital Strategy',
    'Software Development'
  ];

  // Create max deadline dynamically 5 years from now.
  public day: number = this.currentDate.getDate();
  public month: number = this.currentDate.getMonth();
  public year: number = this.currentDate.getFullYear();
  public maxDate: Date = new Date(this.year + 5, this.month, this.day);

  /**
   * Creates a new instance of this component.
   *
   * @constructor
   * @param  {formBuilder} - an abstraction class object to create a form group control for the contact form.
   */
  constructor(private formBuilder: FormBuilder) {
    // Create contact form with all required validators.
    this.contactForm = this.formBuilder.group({
      acceptedTerms: ['', Validators.required],
      fileUploader: ['', FileValidator.maxContentSize(this.maxSize)],
      formControlDeadline: ['', Validators.required],
      formControlDescription: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(30),
          Validators.maxLength(5000)
        ])
      ],
      formControlEmail: [
        '',
        Validators.compose([Validators.required, Validators.email])
      ],
      formControlFirst: ['', Validators.required],
      formControlName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(64)
        ])
      ],
      formControlPhone: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(14),
          Validators.pattern('^[0-9]*$')
        ]
      ],
      formControlService: ['', Validators.required],
      recaptchaCheck: ['', Validators.required]
    });
  }

  /*  */
  /**
   * Filter available days in the datepicker to choose.
   *
   * @param {d} - instance of date.
   * @returns {boolean}
   */
  public filterAvailableDays = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6; // Prevent Saturday and Sunday from being selected.
  };

  /**
   * Handle state of accepted terms.
   *
   * @returns {void}
   */
  public handleTerms(): void {
    this.acceptedTerms = !this.acceptedTerms;
  }

  /**
   * Check if phone in contact form has an error.
   *
   * @param {event} - event for handling the error.
   * @returns {void}
   */
  public hasError(event: any): void {
    if (!event && this.contactForm.value.formControlPhone !== '') {
      this.contactForm
        .get('formControlPhone')! // Non-null assertion operator is required in .ts as well as .html file to compile into AOT.
        .setErrors(['invalid_cell_phone', true]);
    }
  }

  /**
   * Perform certain behaviours on button submit of the contact form.
   *
   * @param {form} - object of submitted contact form.
   */
  public onSubmit(form: NgForm): void {
    // TODO: Send en e-mail.
    console.log(form);
    // TODO: Reset the form.
    // TODO: Add back-end validation, especially with accepted files format.
  }
}
