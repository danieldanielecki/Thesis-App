import { Component  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from '@libs/utils/src/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
// TODO: Add unit tests for these methods.
export class AppComponent {
  public getRouterOutletState(routerOutlet: RouterOutlet): RouterOutlet {
    const routeData = routerOutlet.activatedRouteData['animation'];
    return routeData ? routeData : 'rootPage';
  }
  public onActivate(): void {
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 5); // Scrolling up step.
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 20); // Interval of scrolling up step.
  }
}
