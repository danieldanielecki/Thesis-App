import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';

@NgModule({
  declarations: [SoftwareDevelopmentComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: SoftwareDevelopmentComponent }
    ])
  ]
})
export class SoftwareDevelopmentModule {}
