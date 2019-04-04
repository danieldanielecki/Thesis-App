import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  GlossaryComponent,
  GlossaryModule
} from '@ditectrev-libs/glossary/src/index';

@NgModule({
  imports: [
    GlossaryModule,
    RouterModule.forChild([
      { path: '', component: GlossaryComponent, pathMatch: 'full' }
    ])
  ]
})
export class GlossaryLazyModule {}
