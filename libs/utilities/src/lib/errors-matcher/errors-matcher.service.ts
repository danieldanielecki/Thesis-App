import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

/* Throw error instantly when invalid control is dirty, touched, or submitted. */
// TODO: Maybe because of lack of "providedIn: root" it doesn't work.
export class ErrorsMatcherService implements ErrorStateMatcher {
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
