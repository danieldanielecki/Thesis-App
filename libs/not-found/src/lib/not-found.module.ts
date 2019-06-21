import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../../../libs/shared/src/lib/shared.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: NotFoundComponent }]),
    SharedModule
  ]
})
export class NotFoundModule {}
