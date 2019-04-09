import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  // TODO: Add content to display.
  public informationItems: { icon: string; name: string }[] = [
    { icon: 'home', name: 'Address' },
    { icon: 'call', name: 'Phone number' },
    { icon: 'mail-open', name: 'E-mail' },
    { icon: 'information-circle-outline', name: 'Information' }
  ];

  public bottomMenuItems: { name: string; path: string }[] = [
    { name: 'Copyrights', path: 'copyrights' },
    { name: 'Privacy & Security', path: 'privacy-and-security' },
    { name: 'Sitemap', path: 'sitemap' },
    { name: 'Terms of Use', path: 'terms-of-use' }
  ];

  public rightMenuItems: { name: string; path: string }[] = [
    { name: 'Faq', path: 'faq' },
    { name: 'Glossary', path: 'glossary' },
    { name: 'Partnerships', path: 'partnerships' }
  ];

  // TODO: Add links to social profiles.
  // TODO: On hover invert colors (default: white colors, on hover colors of social platform).
  public socialItems: {
    icon: string;
    name: string;
    url: string;
  }[] = [
    {
      icon: 'behance',
      name: 'Behance',
      url: 'https://behance.net'
    },
    {
      icon: 'dribbble',
      name: 'Dribbble',
      url: 'https://dribbble.com/'
    },
    {
      icon: 'facebook',
      name: 'Facebook',
      url: 'https://www.facebook.com/'
    },
    {
      icon: 'instagram',
      name: 'Instagram',
      url: 'https://www.instagram.com/'
    },
    {
      icon: 'linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/'
    },
    {
      icon: 'twitter',
      name: 'Twitter',
      url: 'https://twitter.com/'
    }
  ];
}
