import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutUsComponent, AboutUsModule } from '@ditectrev-libs/about-us/src/index';

@NgModule({
  imports: [
    AboutUsModule,
    RouterModule.forChild([
      { path: '', component: AboutUsComponent, pathMatch: 'full' }
    ])
  ]
})
export class AboutUsLazyModule { }