import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { SharedModule } from './../../../../libs/shared/src/index';
import { SitemapComponent } from './sitemap/sitemap.component';

@NgModule({
  declarations: [SitemapComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: SitemapComponent }]),
    SharedModule
  ]
})
export class SitemapModule {}
