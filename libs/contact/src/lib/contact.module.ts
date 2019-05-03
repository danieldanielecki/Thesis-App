import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	MatButtonModule,
	MatCardModule,
	MatCheckboxModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatRadioModule,
	MatSelectModule,
	MatOptionModule,
	ErrorStateMatcher,
	ShowOnDirtyErrorStateMatcher,
	MatSlideToggleModule,
	MatListModule
} from '@angular/material';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RECAPTCHA_NONCE, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [ContactComponent],
	imports: [
		RouterModule.forChild([{ path: '', component: ContactComponent }]),
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatCardModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatRadioModule,
		MatSelectModule,
		MatOptionModule,
		MatSlideToggleModule,
		Ng2TelInputModule,
		MatListModule,
		RecaptchaModule,
		RecaptchaFormsModule,
		MaterialFileInputModule,
		FlexLayoutModule
	],
	// TODO: Change the sample API key to a real one (as env variable).
	providers: [
		{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
		{
			provide: RECAPTCHA_SETTINGS,
			useValue: {
				siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
			} as RecaptchaSettings,
		},
		{
			provide: RECAPTCHA_NONCE,
			useValue: '<YOUR_NONCE_VALUE>', // TODO: Add nonce for CSP here (as env variable).
		},
	]
})
export class ContactModule { }
