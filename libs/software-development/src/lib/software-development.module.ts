import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@libs/shared/src/index';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';

@NgModule({
  declarations: [SoftwareDevelopmentComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: SoftwareDevelopmentComponent }
    ]),
    SharedModule
  ]
})
export class SoftwareDevelopmentModule {}
