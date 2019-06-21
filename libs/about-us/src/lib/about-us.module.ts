import { AboutUsComponent } from './about-us/about-us.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../../../libs/shared/src/lib/shared.module';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    NgCircleProgressModule.forRoot(),
    RouterModule.forChild([{ path: '', component: AboutUsComponent }]),
    SharedModule
  ]
})
export class AboutUsModule {}
