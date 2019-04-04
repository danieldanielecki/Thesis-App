import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [RouterModule.forChild([{ path: '', component: AboutUsComponent }])]
})
export class AboutUsModule {}
