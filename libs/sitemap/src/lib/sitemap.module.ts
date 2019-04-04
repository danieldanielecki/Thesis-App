import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SitemapComponent } from './sitemap/sitemap.component';

@NgModule({
  declarations: [SitemapComponent],
  imports: [RouterModule.forChild([{ path: '', component: SitemapComponent }])]
})
export class SitemapModule {}
