import { AboutUsComponent } from './about-us/about-us.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@libs/shared/src/index';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    NgCircleProgressModule.forRoot({
      animationDuration: 4000,
      radius: 50,
      responsive: true,
      showUnits: false,
      space: 0,
      titleColor: '#000000'
    }),
    RouterModule.forChild([{ path: '', component: AboutUsComponent }]),
    SharedModule
  ]
})
export class AboutUsModule {}
