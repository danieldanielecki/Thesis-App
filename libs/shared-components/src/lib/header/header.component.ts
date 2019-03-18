import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // TODO: Change blog to external URL.
  // TODO: Think about close button.
  // TODO: Blog might be dropped later.
  // TODO: Change url to path.
  menuItems: { icon: string; name: string; url: string }[] = [
    { icon: 'home', name: 'Home', url: '/' },
    { icon: 'arrow_drop_down', name: 'Services', url: '/services' },
    { icon: 'fingerprint', name: 'Methodology', url: '/methodology' },
    { icon: 'sentiment_satisfied_alt', name: 'About us', url: '/about-us' },
    { icon: 'format_quote', name: 'Blog', url: '/blog' },
    { icon: 'alternate_email', name: 'Contact', url: '/contact' },
    { icon: 'close', name: 'Close', url: '/' }
  ];

  // Change this as a subroute of services.
  servicesItems: { icon: string; name: string; url: string }[] = [
    { icon: 'security', name: 'Cyber Security', url: 'cyber-security' },
    { icon: 'star', name: 'Digital Strategy', url: 'digital-strategy' },
    { icon: 'code', name: 'Software Development', url: 'software-development' }
  ];
}
