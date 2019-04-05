import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  SoftwareDevelopmentComponent,
  SoftwareDevelopmentModule
} from '@libs/software-development/src/index';

@NgModule({
  imports: [
    SoftwareDevelopmentModule,
    RouterModule.forChild([
      { path: '', component: SoftwareDevelopmentComponent, pathMatch: 'full' }
    ])
  ]
})
export class SoftwareDevelopmentLazyModule {}