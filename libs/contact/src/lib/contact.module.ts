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
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: String(process.env.RECAPTCHA_API_KEY) // TODO: It causes problem when it goes from GitLab CI.
      } as RecaptchaSettings
    }
  ]
})
export class ContactModule {}
