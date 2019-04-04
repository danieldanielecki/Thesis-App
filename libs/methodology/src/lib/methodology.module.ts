import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MethodologyComponent } from './methodology/methodology.component';

@NgModule({
  declarations: [MethodologyComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: MethodologyComponent }])
  ]
})
export class MethodologyModule {}
