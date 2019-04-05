import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CyberSecurityComponent,
  CyberSecurityModule
} from '@libs/cyber-security/src/index';

@NgModule({
  imports: [
    CyberSecurityModule,
    RouterModule.forChild([
      { path: '', component: CyberSecurityComponent, pathMatch: 'full' }
    ])
  ]
})
export class CybeSecurityLazyModule {}
