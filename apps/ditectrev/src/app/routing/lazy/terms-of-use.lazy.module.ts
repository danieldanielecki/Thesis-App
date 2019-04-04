import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  TermsOfUseComponent,
  TermsOfUseModule
} from '@ditectrev-libs/terms-of-use/src/index';

@NgModule({
  imports: [
    TermsOfUseModule,
    RouterModule.forChild([
      { path: '', component: TermsOfUseComponent, pathMatch: 'full' }
    ])
  ]
})
export class TermsOfServiceLazyModule {}