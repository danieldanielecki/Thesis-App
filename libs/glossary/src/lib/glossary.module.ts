import { GlossaryComponent } from './glossary/glossary.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GlossaryComponent],
  imports: [RouterModule.forChild([{ path: '', component: GlossaryComponent }])]
})
export class GlossaryModule {}
