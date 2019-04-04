import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrivacyAndSecurityComponent } from './privacy-and-security/privacy-and-security.component';

@NgModule({
  declarations: [PrivacyAndSecurityComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: PrivacyAndSecurityComponent }
    ])
  ]
})
export class PrivacyAndSecurityModule {}
