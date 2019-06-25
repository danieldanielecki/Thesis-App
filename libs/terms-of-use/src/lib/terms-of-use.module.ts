import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { SharedModule } from './../../../../libs/shared/src/index';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';

@NgModule({
  declarations: [TermsOfUseComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: TermsOfUseComponent }]),
    SharedModule
  ]
})
export class TermsOfUseModule {}
