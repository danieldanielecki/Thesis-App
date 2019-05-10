import { NgModule } from '@angular/core';
import { PartnershipsComponent } from './partnerships/partnerships.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PartnershipsComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: PartnershipsComponent }])
  ]
})
export class PartnershipsModule {}
