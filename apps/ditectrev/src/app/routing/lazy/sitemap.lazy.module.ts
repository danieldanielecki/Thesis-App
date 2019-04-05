import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SitemapComponent, SitemapModule } from '@libs/sitemap/src/index';

@NgModule({
  imports: [
    SitemapModule,
    RouterModule.forChild([
      { path: '', component: SitemapComponent, pathMatch: 'full' }
    ])
  ]
})
export class SitemapLazyModule {}