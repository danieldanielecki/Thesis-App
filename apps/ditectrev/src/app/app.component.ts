import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from './../../../../libs/utilities/src/lib/fade-animation/fade.animation';
import { NgxSpinnerService } from 'ngx-spinner';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
// TODO: Add unit tests for these methods.
export class AppComponent implements OnInit {
  public getRouterOutletState(routerOutlet: RouterOutlet): RouterOutlet {
    const routeData = routerOutlet.activatedRouteData['animation'];
    return routeData ? routeData : 'rootPage';
  }

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    // Show spinner for 2 seconds.
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
}
