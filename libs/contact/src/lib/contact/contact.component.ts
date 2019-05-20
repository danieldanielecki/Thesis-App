import { Component } from '@angular/core';
import { FileValidator } from 'ngx-material-file-input';
import { FormBuilder, Validators, NgForm, FormGroup } from '@angular/forms';

// TODO: Add verbose datepicker with custom formats.
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public acceptedTerms: boolean = false;
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
   * @constructor
   * @description Creates a new instance of this component.
   * @param  {formBuilder} - an abstraction class object to create a form group control for the contact form.
   */
  constructor(private formBuilder: FormBuilder) {}

  // Create contact form with all required validators.
  public contactForm: FormGroup = this.formBuilder.group({
    acceptedTerms: ['', Validators.required],
    fileUploader: [
      '',
      Validators.compose([
        FileValidator.maxContentSize(this.maxSize),
        Validators.maxLength(512),
        Validators.minLength(2)
      ])
    ],
    formControlContactPreference: '',
    formControlDeadline: '',
    formControlDescription: [
      '',
      Validators.compose([
        Validators.maxLength(5000),
        Validators.minLength(30),
        Validators.required
      ])
    ],
    formControlEmail: [
      '',
      Validators.compose([
        Validators.email,
        Validators.maxLength(512),
        Validators.minLength(6),
        Validators.required
      ])
    ],
    formControlName: [
      '',
      Validators.compose([
        Validators.maxLength(64),
        Validators.minLength(2),
        Validators.pattern('^[a-zA-Z ]*$'),
        Validators.required
      ])
    ],
    formControlPhone: [
      '',
      Validators.compose([
        Validators.maxLength(14),
        Validators.minLength(4),
        Validators.pattern('^[0-9]*$')
      ])
    ],
    formControlService: '',
    recaptchaCheck: ['', Validators.required]
  });

  /**
   * @description Filter available days in the datepicker to choose.
   * @param {d} - instance of date.
   * @returns {boolean}
   */
  public filterAvailableDays = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6; // Prevent Saturday and Sunday from being selected.
  };

  /**
   * @description Handle state of accepted terms.
   * @returns {void}
   */
  public handleTerms(): void {
    this.acceptedTerms = !this.acceptedTerms;
  }

  /**
   * @description Check if phone in contact form has an error.
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
   * @description Perform certain behaviours on button submit of the contact form.
   * @param {form} - object of submitted contact form.
   */
  public onSubmit(form: NgForm): void {
    this.acceptedTerms = false;
    this.contactForm.reset();
    // TODO: Send en e-mail.
    console.log(form);
    // TODO: Add SweetAlerts on form reset, control behaviour of the form with errors .
    // TODO: Add back-end validation, especially with accepted files format, issue #31.
    // TODO: After moving ErrorsStateMatcher try to resetForm of contactForm in order to clear validators after submit.
  }
}
