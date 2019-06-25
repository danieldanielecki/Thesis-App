import { NgModule } from '@angular/core';
import { PartnershipsComponent } from './partnerships/partnerships.component';
import { RouterModule } from '@angular/router';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { SharedModule } from './../../../../libs/shared/src/index';

@NgModule({
  declarations: [PartnershipsComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: PartnershipsComponent }]),
    SharedModule
  ]
})
export class PartnershipsModule {}
