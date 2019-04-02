import { trigger, animate, transition, style } from '@angular/animations';

export const fadeAnimation =
  // Trigger name, needed to attach in HTML.
  trigger('routeState', [
    // Route for 'enter' transition.
    transition('*<=>*', [
      style({ opacity: 0.1 }), // CSS styles at start of transition.
      animate('1.2s', style({ opacity: 1 })) // Animation and styles at end of transition.
    ])
  ]);