import { CopyrightsComponent } from './copyrights/copyrights.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CopyrightsComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: CopyrightsComponent }])
  ]
})
export class CopyrightsModule {}
