import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  PartnershipsComponent,
  PartnershipsModule
} from '@ditectrev-libs/partnerships/src/index';

@NgModule({
  imports: [
    PartnershipsModule,
    RouterModule.forChild([
      { path: '', component: PartnershipsComponent, pathMatch: 'full' }
    ])
  ]
})
export class PartnershipsLazyModule {}