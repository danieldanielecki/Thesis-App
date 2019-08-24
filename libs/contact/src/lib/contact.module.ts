import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ContactComponent } from './contact/contact.component';
import { environment } from '@apps/ditectrev/src/environments/environment';
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
// tslint:disable-next-line:nx-enforce-module-boundaries
import { SharedModule } from './../../../../libs/shared/src/index';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    MaterialFileInputModule,
    Ng2TelInputModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    RouterModule.forChild([{ path: '', component: ContactComponent }]),
    SharedModule
  ],
  providers: [
    {
      provide: RECAPTCHA_NONCE,
      useValue: '<YOUR_NONCE_VALUE>' // TODO: Add nonce for CSP here (as env variable). Maybe also recaptcha v3, check it as well invisible recaptcha to susbcribe.
    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LeHfacUAAAAACw9nhLeat5AGcMjxiUNVj7oUzCA'
      } as RecaptchaSettings
    }
  ]
})
export class ContactModule {}
