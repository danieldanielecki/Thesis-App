import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaqComponent, FaqModule } from '@libs/faq/src/index';

@NgModule({
  imports: [
    FaqModule,
    RouterModule.forChild([
      { path: '', component: FaqComponent, pathMatch: 'full' }
    ])
  ]
})
export class FaqLazyModule {}