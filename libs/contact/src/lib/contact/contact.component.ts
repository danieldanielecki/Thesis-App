import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { FileValidator } from 'ngx-material-file-input';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public acceptedTerms: boolean = false;
  public contactForm: FormGroup;
  public servicesItems: string[] = [
    'Cyber Security',
    'Digital Strategy',
    'Software Development'
  ];
  public maxSize: number = 20971520;

  /**
   * Creates a new instance of this component.
   *
   * @param  {formBuilder} - an abstraction class object to create a form group control for the contact form.
   */
  constructor(private formBuilder: FormBuilder) {
    // Create contact form with all required validators.
    this.contactForm = this.formBuilder.group({
      fromControlName: ['', Validators.required],
      formControlDescription: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(30),
          Validators.maxLength(5000)
        ])
      ],
      formControlDeadline: ['', Validators.required],
      formControlFirst: ['', Validators.required],
      formControlService: ['', Validators.required],
      formControlPhone: [
        '',
        [Validators.required, Validators.pattern('^[0-9]*$')]
      ],
      formControlEmail: [
        '',
        Validators.compose([Validators.required, Validators.email])
      ],
      acceptedTerms: ['', Validators.required],
      recaptchaCheck: ['', Validators.required],
      fileUploader: ['', FileValidator.maxContentSize(this.maxSize)]
    });
  }

  /* Handle state of accepted terms. */
  handleTerms() {
    this.acceptedTerms = !this.acceptedTerms;
  }

  /**
   * @param  {NgForm} form
   */
  onSubmit(form: NgForm) {
    // TODO: Send en e-mail.
    console.log(form);
    // TODO: Reset the form.
  }

  // Non-null assertion operator is required in .ts as well as .html file to compile into AOT.
  hasError(event: any): void {
    if (!event && this.contactForm.value.formControlPhone !== '') {
      this.contactForm
        .get('formControlPhone')!
        .setErrors(['invalid_cell_phone', true]);
    }
  }
}
