import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public contactForm: FormGroup;
  public acceptedTerms: boolean = false;

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
      acceptedTerms: ['', Validators.required]
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

  // TODO: Check it, on first compilation it doesn't compile, only uncommenting it after compilation makes it workins. Problem with error TS2531: Object is possibly 'null' (Fix using non-null assertion operator).
  hasError(event: any): void {
    if (!event && this.contactForm.value.formControlPhone !== '') {
      this.contactForm
        .get('formControlPhone')
        .setErrors(['invalid_cell_phone', true]);
    }
  }
}
