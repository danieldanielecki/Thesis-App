import { NgModule } from '@angular/core';
import { PrivacyAndSecurityComponent } from './privacy-and-security/privacy-and-security.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PrivacyAndSecurityComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: PrivacyAndSecurityComponent }
    ])
  ]
})
export class PrivacyAndSecurityModule {}
