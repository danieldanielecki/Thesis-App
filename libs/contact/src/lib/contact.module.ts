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
import {Ng2TelInputModule} from 'ng2-tel-input';

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
    MatListModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ]
})
export class ContactModule {}
