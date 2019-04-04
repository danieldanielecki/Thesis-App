import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    FlexLayoutModule,
    RouterModule.forChild([{ path: '', component: NotFoundComponent }])
  ]
})
export class NotFoundModule {}
