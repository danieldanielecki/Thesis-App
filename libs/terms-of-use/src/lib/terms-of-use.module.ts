import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';

@NgModule({
  declarations: [TermsOfUseComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: TermsOfUseComponent }])
  ]
})
export class TermsOfUseModule {}
