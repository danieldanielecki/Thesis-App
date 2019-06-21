import { FaqComponent } from './faq/faq.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../../../libs/shared/src/lib/shared.module';

@NgModule({
  declarations: [FaqComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: FaqComponent }]),
    SharedModule
  ]
})
export class FaqModule {}
