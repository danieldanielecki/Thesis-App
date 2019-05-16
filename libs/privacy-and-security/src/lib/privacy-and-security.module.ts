import { NgModule } from '@angular/core';
import { PrivacyAndSecurityComponent } from './privacy-and-security/privacy-and-security.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@libs/shared/src/index';

@NgModule({
  declarations: [PrivacyAndSecurityComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: PrivacyAndSecurityComponent }
    ]),
    SharedModule
  ]
})
export class PrivacyAndSecurityModule {}
