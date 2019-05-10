import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [RouterModule.forChild([{ path: '', component: AboutUsComponent }])]
})
export class AboutUsModule {}
