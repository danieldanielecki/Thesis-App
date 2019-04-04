import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CopyrightsComponent,
  CopyrightsModule
} from '@ditectrev-libs/copyrights/src/index';

@NgModule({
  imports: [
    CopyrightsModule,
    RouterModule.forChild([
      { path: '', component: CopyrightsComponent, pathMatch: 'full' }
    ])
  ]
})
export class CopyrightsLazyModule {}