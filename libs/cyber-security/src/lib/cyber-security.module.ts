import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../../../libs/shared/src/lib/shared.module';

@NgModule({
  declarations: [CyberSecurityComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: CyberSecurityComponent }]),
    SharedModule
  ]
})
export class CyberSecurityModule {}
