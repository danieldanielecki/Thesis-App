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
      formControlEmail: [
        '',
        Validators.compose([Validators.required, Validators.email])
      ],
      acceptedTerms: ['']
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
  }
}
