import { CopyrightsComponent } from './copyrights/copyrights.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@libs/shared/src/index';

@NgModule({
  declarations: [CopyrightsComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: CopyrightsComponent }]),
    SharedModule
  ]
})
export class CopyrightsModule {}
