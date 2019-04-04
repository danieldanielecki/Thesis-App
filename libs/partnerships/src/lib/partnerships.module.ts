import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PartnershipsComponent } from './partnerships/partnerships.component';

@NgModule({
  declarations: [PartnershipsComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: PartnershipsComponent }])
  ]
})
export class PartnershipsModule {}
