import { Component } from '@angular/core';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent {
  public companyItems: { name: string; path: string }[] = [
    { name: 'Home', path: '/' },
    { name: 'Methodology', path: '/methodology' },
    { name: 'About us', path: '/about-us' },
    { name: 'Contact', path: '/contact' }
  ];

  public informationItems: { name: string; path: string }[] = [
    { name: 'FAQ', path: '/faq' },
    { name: 'Glossary', path: '/glossary' },
    { name: 'Partnerships', path: '/partnerships' }
  ];

  public resourcesItems: { name: string; path: string }[] = [
    { name: 'Copyrights', path: '/copyrights' },
    { name: 'Privacy & Security', path: '/privacy-and-security' },
    { name: 'Sitemap', path: '/sitemap' },
    { name: 'Terms of Use', path: '/terms-of-use' }
  ];

  public servicesItems: { name: string; path: string }[] = [
    { name: 'Cyber Security', path: '/cyber-security' },
    { name: 'Digital Strategy', path: '/digital-strategy' },
    { name: 'Software Development', path: '/software-development' }
  ];
}
