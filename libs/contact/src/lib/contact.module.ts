import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [RouterModule.forChild([{ path: '', component: ContactComponent }])]
})
export class ContactModule {}
