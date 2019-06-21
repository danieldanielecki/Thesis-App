import { MethodologyComponent } from './methodology/methodology.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../../../libs/shared/src/lib/shared.module';

@NgModule({
  declarations: [MethodologyComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: MethodologyComponent }]),
    SharedModule
  ]
})
export class MethodologyModule {}
