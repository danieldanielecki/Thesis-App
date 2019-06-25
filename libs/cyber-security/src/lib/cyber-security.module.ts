import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { SharedModule } from './../../../../libs/shared/src/index';

@NgModule({
  declarations: [CyberSecurityComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: CyberSecurityComponent }]),
    SharedModule
  ]
})
export class CyberSecurityModule {}
