import { MethodologyComponent } from './methodology/methodology.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MethodologyComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: MethodologyComponent }])
  ]
})
export class MethodologyModule {}
