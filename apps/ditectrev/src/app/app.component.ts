import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const FADE_ANIMATION =
  // Trigger name, needed to attach in HTML.
  trigger('routeState', [
    // Route for 'enter' transition.
    transition('*<=>*', [
      style({ opacity: 0.1 }), // CSS styles at start of transition.
      animate('1.2s', style({ opacity: 1 })) // Animation and styles at end of transition.
    ])
  ]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [FADE_ANIMATION]
})
// TODO: Add unit tests coverage for these methods.
export class AppComponent {
  public getRouterOutletState(routerOutlet: RouterOutlet): RouterOutlet {
    const routeData = routerOutlet.activatedRouteData.animation;
    return routeData ? routeData : 'rootPage';
  }
}
