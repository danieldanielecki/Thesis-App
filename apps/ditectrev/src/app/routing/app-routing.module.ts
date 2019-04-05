// Angular imports.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@libs/home/src/index';

// TODO: lazy routing in such a way is a workaround, at the point of time writing this code there was a bug with Angular CLI (Issue #6373).
// TODO: Add nested routes for services.
// TODO: Think about routing on mobile, if the sidebar should be not closed after click.
// TODO: Up - but what if user clicks servies, what should happen? The menu should stay open with sidebar open only for that case, or always sidenav should be open/closed? Think about it.
const routes: Routes = [
  // TODO: Change blog to external URL.
  // {
  //   path: 'blog',
  //   component: HomeComponent,
  //   data: { animation: 'blog' }
  // }
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'home' },
    pathMatch: 'full'
  },
  {
    data: { animation: 'about-us' },
    loadChildren: './lazy/about-us.lazy.module#AboutUsLazyModule',
    path: 'about-us'
  },
  {
    data: { animation: 'contact' },
    loadChildren: './lazy/contact.lazy.module#ContactLazyModule',
    path: 'contact'
  },
  {
    data: { animation: 'copyrights' },
    loadChildren: './lazy/copyrights.lazy.module#CopyrightsLazyModule',
    path: 'copyrights'
  },
  // TODO: Define subservices in services component.
  {
    data: { animation: 'cyber-security' },
    loadChildren: './lazy/cyber-security.lazy.module#CybeSecurityLazyModule',
    path: 'cyber-security'
  },
  {
    data: { animation: 'digital-strategy' },
    loadChildren:
      './lazy/digital-strategy.lazy.module#DigitalStrategyLazyModule',
    path: 'digital-strategy'
  },
  {
    data: { animation: 'faq' },
    loadChildren: './lazy/faq.lazy.module#FaqLazyModule',
    path: 'faq'
  },
  {
    data: { animation: 'glossary' },
    loadChildren: './lazy/glossary.lazy.module#GlossaryLazyModule',
    path: 'glossary'
  },
  {
    data: { animation: 'methodology' },
    loadChildren: './lazy/methodology.lazy.module#MethodologyLazyModule',
    path: 'methodology'
  },
  {
    data: { animation: 'partnerships' },
    loadChildren: './lazy/partnerships.lazy.module#PartnershipsLazyModule',
    path: 'partnerships'
  },
  {
    data: { animation: 'privacy-and-security' },
    loadChildren:
      './lazy/privacy-and-security.lazy.module#PrivacyAndSecurityLazyModule',
    path: 'privacy-and-security'
  },
  {
    data: { animation: 'services' },
    loadChildren: './lazy/services.lazy.module#ServicesLazyModule',
    path: 'services'
  },
  {
    data: { animation: 'sitemap' },
    loadChildren: './lazy/sitemap.lazy.module#SitemapLazyModule',
    path: 'sitemap'
  },
  {
    data: { animation: 'software-development' },
    loadChildren:
      './lazy/software-development.lazy.module#SoftwareDevelopmentLazyModule',
    path: 'software-development'
  },
  {
    data: { animation: 'terms-of-use' },
    loadChildren: './lazy/terms-of-use.lazy.module#TermsOfUseLazyModule',
    path: 'terms-of-use'
  },
  {
    data: { animation: 'not-found' },
    loadChildren: './lazy/not-found.lazy.module#NotFoundLazyModule',
    path: 'not-found'
  },
  // It's important that wildcard route has to be the last element in array of routes, because routes parses from top to bottom.
  {
    path: '**', // Wildcard path, which means to catch all other routes, not specified above.
    redirectTo: 'not-found', // Alternative to component in routes, which redirects to specific path.
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}