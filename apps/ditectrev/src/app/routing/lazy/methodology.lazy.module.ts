import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  MethodologyComponent,
  MethodologyModule
} from '@ditectrev-libs/methodology/src/index';

@NgModule({
  imports: [
    MethodologyModule,
    RouterModule.forChild([
      { path: '', component: MethodologyComponent, pathMatch: 'full' }
    ])
  ]
})
export class MethodologyLazyModule {}