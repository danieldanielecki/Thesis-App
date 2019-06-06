declare const RECAPTCHA_API_KEY: string;

import { ContactComponent } from './contact/contact.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { NgModule } from '@angular/core';
import {
  RecaptchaModule,
  RECAPTCHA_SETTINGS,
  RECAPTCHA_NONCE,
  RecaptchaSettings
} from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@libs/shared/src/index';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    MaterialFileInputModule,
    Ng2TelInputModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    RouterModule.forChild([{ path: '', component: ContactComponent }]),
    SharedModule
  ],
  // TODO: Change the sample API key to a real one (as env variable).
  providers: [
    {
      provide: RECAPTCHA_NONCE,
      useValue: '<YOUR_NONCE_VALUE>' // TODO: Add nonce for CSP here (as env variable). Maybe also recaptcha v3, check it as well invisible recaptcha to susbcribe.
    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: RECAPTCHA_API_KEY
      } as RecaptchaSettings
    }
  ]
})
export class ContactModule {}
