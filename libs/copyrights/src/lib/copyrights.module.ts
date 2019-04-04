import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CopyrightsComponent } from './copyrights/copyrights.component';

@NgModule({
  declarations: [CopyrightsComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: CopyrightsComponent }])
  ]
})
export class CopyrightsModule {}
