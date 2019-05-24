import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

/* Throw error instantly when invalid control is dirty, touched, or submitted. */
// TODO: Add unit test for this.
export class ApplicationErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    // '!!' is truthiness (represented as a boolean) - it's simply casting. It gives the ability to check the truthiness of multiple variables against each other in a repeatable, standardized (and JSLint friendly) fashion.
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
