import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  NotFoundComponent,
  NotFoundModule
} from '@ditectrev-libs/not-found/src/index';

@NgModule({
  imports: [
    NotFoundModule,
    RouterModule.forChild([
      { path: '', component: NotFoundComponent, pathMatch: 'full' }
    ])
  ]
})
export class NotFoundLazyModule {}
