import { Component } from '@angular/core';
import {
  faAt,
  faHome,
  faInfoCircle,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FormControl, Validators } from '@angular/forms';
import { library } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public constructor() {
    library.add(faAt);
    library.add(faFacebookF);
    library.add(faHome);
    library.add(faInstagram);
    library.add(faInfoCircle);
    library.add(faLinkedinIn);
    library.add(faPhone);
    library.add(faTwitter);
  }

  public currentDate: Date = new Date();
  public formControlEmail: FormControl = new FormControl(null, [
    Validators.email,
    Validators.required
  ]); // TODO: Check if not unify it to reactive forms like in contact, but only if it'll be doable to implement error state matcher into reactive forms.

  public bottomMenuItems: { name: string; path: string }[] = [
    { name: 'Copyrights', path: 'copyrights' },
    { name: 'Privacy & Security', path: 'privacy-and-security' },
    { name: 'Sitemap', path: 'sitemap' },
    { name: 'Terms of Use', path: 'terms-of-use' }
  ];

  // TODO: Add content to display.
  public informationItems: {
    content: string;
    icon: [string, string];
    name: string;
  }[] = [
    { content: 'Oxford Street 12', icon: ['fas', 'home'], name: 'Address' },
    { content: '+123456789', icon: ['fas', 'phone'], name: 'Phone number' },
    { content: 'contact@mail.com', icon: ['fas', 'at'], name: 'Email' },
    {
      content: 'Tax ID: 554433',
      icon: ['fas', 'info-circle'],
      name: 'Legal information'
    }
  ];
  public rightMenuItems: { name: string; path: string }[] = [
    { name: 'Faq', path: 'faq' },
    { name: 'Glossary', path: 'glossary' },
    { name: 'Partnerships', path: 'partnerships' }
  ];

  // TODO: Add links to social profiles.
  public socialItems: {
    icon: [string, string];
    name: string;
    url: string;
  }[] = [
    {
      icon: ['fab', 'facebook-f'],
      name: 'Facebook',
      url: 'https://www.facebook.com/'
    },
    {
      icon: ['fab', 'instagram'],
      name: 'Instagram',
      url: 'https://www.instagram.com/'
    },
    {
      icon: ['fab', 'linkedin-in'],
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/'
    },
    {
      icon: ['fab', 'twitter'],
      name: 'Twitter',
      url: 'https://twitter.com/'
    }
  ];
}
