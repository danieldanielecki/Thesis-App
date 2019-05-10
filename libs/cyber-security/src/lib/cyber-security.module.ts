import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CyberSecurityComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: CyberSecurityComponent }])
  ]
})
export class CyberSecurityModule {}
