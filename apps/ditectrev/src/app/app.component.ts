import { Component } from '@angular/core';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { fadeAnimation } from './../../../../libs/utilities/src/lib/fade-animation/fade.animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
// TODO: Add unit tests coverage for these methods.
export class AppComponent {
  public getRouterOutletState(routerOutlet: RouterOutlet): RouterOutlet {
    const routeData = routerOutlet.activatedRouteData.animation;
    return routeData ? routeData : 'rootPage';
  }
}
