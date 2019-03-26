// Angular imports.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Main components.
import { AboutUsComponent } from '@app/about-us-component';
import { ContactComponent } from '@app/contact-component';
import { HomeComponent } from '@app/home-component';
import { MethodologyComponent } from '@app/methodology-component';
import { ServicesComponent } from '@app/services-component';

// Services components.
import { CyberSecurityComponent } from '@app/cyber-security-component';
import { DigitalStrategyComponent } from '@app/digital-strategy-component';
import { SoftwareDevelopmentComponent } from '@app/software-development-component';

// TODO: Change all these modules to component.
// TODO: Add animations.
// TODO: Add lazy routing.
// TODO: Add 404 page.
// TODO: Add smooth scroll to top if after changing route it would leave the user on the bottom of the page.
// TODO: Add nested routes for services.
// TODO: Think about routing on mobile, if the sidebar should be not closed after click.
// TODO: Up - but what if user clicks servies, what should happen? The menu should stay open with sidebar open only for that case, or always sidenav should be open/closed? Think about it.
const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'home' } },
  {
    path: 'services',
    component: ServicesComponent,
    data: { animation: 'services' }
  },
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
    path: 'software-development',
    component: SoftwareDevelopmentComponent,
    data: { animation: 'software-development' }
  },
  {
    path: 'methodology',
    component: MethodologyComponent,
    data: { animation: 'methodology' }
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    data: { animation: 'about-us' }
  },
  // TODO: Change blog to external URL.
  // {
  //   path: 'blog',
  //   component: HomeComponent,
  //   data: { animation: 'blog' }
  // },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'contact' }
  },
  // It's important that wildcard route has to be the last element in array of routes, because routes parses from top to bottom.
  {
    path: '**', // Wildcard path, which means to catch all other routes, not specified above.
    redirectTo: '/not-found' // Alternative to component in routes, which redirects to specific path.
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}