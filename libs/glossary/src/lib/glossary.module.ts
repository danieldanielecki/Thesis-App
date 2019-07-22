import { GlossaryComponent } from './glossary/glossary.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { SharedModule } from './../../../../libs/shared/src/index';

@NgModule({
  declarations: [GlossaryComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: GlossaryComponent }]),
    SharedModule
  ]
})
export class GlossaryModule {}
