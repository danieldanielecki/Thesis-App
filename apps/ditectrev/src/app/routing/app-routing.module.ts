// Angular imports.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Application components imports.
import { AboutUsComponent } from '@app/about-us-component';
import { ContactComponent } from '@app/contact-component';
import { CopyrightsComponent } from '@app/copyrights-component';
import { CyberSecurityComponent } from '@app/cyber-security-component';
import { DigitalStrategyComponent } from '@app/digital-strategy-component';
import { FaqComponent } from '@app/faq-component';
import { GlossaryComponent } from '@app/glossary-component';
import { HomeComponent } from '@app/home-component';
import { MethodologyComponent } from '@app/methodology-component';
import { NotFoundComponent } from '@app/not-found-component';
import { PartnershipsComponent } from '@app/partnerships-component';
import { PrivacyAndSecurityComponent } from '@app/privacy-and-security-component';
import { ServicesComponent } from '@app/services-component';
import { SitemapComponent } from '@app/sitemap-component';
import { SoftwareDevelopmentComponent } from '@app/software-development-component';
import { TermsOfUseComponent } from '@app/terms-of-use-component';

// TODO: Add animations.
// TODO: Add lazy routing.
// TODO: Add smooth scroll to top if after changing route it would leave the user on the bottom of the page.
// TODO: Add nested routes for services.
// TODO: Think about routing on mobile, if the sidebar should be not closed after click.
// TODO: Up - but what if user clicks servies, what should happen? The menu should stay open with sidebar open only for that case, or always sidenav should be open/closed? Think about it.
const routes: Routes = [
  // TODO: Change blog to external URL.
  // {
  //   path: 'blog',
  //   component: HomeComponent,
  //   data: { animation: 'blog' }
  // },
  { path: '', component: HomeComponent, data: { animation: 'home' } },
  {
    path: 'about-us',
    component: AboutUsComponent,
    data: { animation: 'about-us' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'contact' }
  },
  {
    path: 'copyrights',
    component: CopyrightsComponent,
    data: { animation: 'copyrights' }
  },
  // TODO: Define subservices in services component.
  {
    path: 'cyber-security',
    component: CyberSecurityComponent,
    data: { animation: 'cyber-security' }
  },
  {
    path: 'digital-strategy',
    component: DigitalStrategyComponent,
    data: { animation: 'digital-strategy' }
  },
  {
    path: 'faq',
    component: FaqComponent,
    data: { animation: 'faq' }
  },
  {
    path: 'glossary',
    component: GlossaryComponent,
    data: { animation: 'glossary' }
  },
  {
    path: 'methodology',
    component: MethodologyComponent,
    data: { animation: 'methodology' }
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: { animation: 'not-found' }
  },
  {
    path: 'partnerships',
    component: PartnershipsComponent,
    data: { animation: 'partnerships' }
  },
  {
    path: 'privacy-and-security',
    component: PrivacyAndSecurityComponent,
    data: { animation: 'privacy-and-security' }
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: { animation: 'services' }
  },
  {
    path: 'sitemap',
    component: SitemapComponent,
    data: { animation: 'sitemap' }
  },
  {
    path: 'software-development',
    component: SoftwareDevelopmentComponent,
    data: { animation: 'software-development' }
  },
  {
    path: 'terms-of-use',
    component: TermsOfUseComponent,
    data: { animation: 'terms-of-use' }
  },
  // It's important that wildcard route has to be the last element in array of routes, because routes parses from top to bottom.
  {
    path: '**', // Wildcard path, which means to catch all other routes, not specified above.
    redirectTo: 'not-found' // Alternative to component in routes, which redirects to specific path.
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
