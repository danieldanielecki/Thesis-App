import { FaqComponent } from './faq/faq.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { SharedModule } from './../../../../libs/shared/src/index';

@NgModule({
  declarations: [FaqComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: FaqComponent }]),
    SharedModule
  ]
})
export class FaqModule {}
