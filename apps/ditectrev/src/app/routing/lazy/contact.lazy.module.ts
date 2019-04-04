import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  ContactComponent,
  ContactModule
} from '@ditectrev-libs/contact/src/index';

@NgModule({
  imports: [
    ContactModule,
    RouterModule.forChild([
      { path: '', component: ContactComponent, pathMatch: 'full' }
    ])
  ]
})
export class ContactLazyModule {}