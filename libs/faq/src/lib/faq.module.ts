import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [FaqComponent],
  imports: [RouterModule.forChild([{ path: '', component: FaqComponent }])]
})
export class FaqModule {}
