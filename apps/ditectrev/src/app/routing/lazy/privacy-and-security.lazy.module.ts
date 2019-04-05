import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  PrivacyAndSecurityComponent,
  PrivacyAndSecurityModule
} from '@libs/privacy-and-security/src/index';

@NgModule({
  imports: [
    PrivacyAndSecurityModule,
    RouterModule.forChild([
      { path: '', component: PrivacyAndSecurityComponent, pathMatch: 'full' }
    ])
  ]
})
export class PrivacyAndSecurityLazyModule {}
