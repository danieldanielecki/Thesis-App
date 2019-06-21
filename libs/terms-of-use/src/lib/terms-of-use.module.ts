import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../../../libs/shared/src/lib/shared.module';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';

@NgModule({
  declarations: [TermsOfUseComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: TermsOfUseComponent }]),
    SharedModule
  ]
})
export class TermsOfUseModule {}
