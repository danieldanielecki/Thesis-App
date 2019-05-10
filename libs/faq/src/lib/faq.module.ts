import { FaqComponent } from './faq/faq.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FaqComponent],
  imports: [RouterModule.forChild([{ path: '', component: FaqComponent }])]
})
export class FaqModule {}
