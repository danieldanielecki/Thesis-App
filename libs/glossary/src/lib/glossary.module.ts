import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlossaryComponent } from './glossary/glossary.component';

@NgModule({
  declarations: [GlossaryComponent],
  imports: [RouterModule.forChild([{ path: '', component: GlossaryComponent }])]
})
export class GlossaryModule {}
