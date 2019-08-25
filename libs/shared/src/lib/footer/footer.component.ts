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
import { HttpClient, HttpParams } from '@angular/common/http';
import { library } from '@fortawesome/fontawesome-svg-core';

// TODO: Make this a separated file.
interface ResponseMailChimp {
  result: string;
  msg: string;
}

// TODO: Social icons Facebook, Instagram, LinkedIn, Medium, Twitter and YouTube [with education included, when courses will be done then CodeSandbox, GitHub, Slack too].
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public constructor(private httpClient: HttpClient) {
    library.add(faAt);
    library.add(faFacebookF);
    library.add(faHome);
    library.add(faInstagram);
    library.add(faInfoCircle);
    library.add(faLinkedinIn);
    library.add(faPhone);
    library.add(faTwitter);
  }

  public formControlEmail: FormControl = new FormControl(null, [
    Validators.email,
    Validators.maxLength(512),
    Validators.minLength(6),
    Validators.required
  ]);

  public currentDate: Date = new Date();
  public endpointMailChimp =
    'https://ditectrev.us15.list-manage.com/subscribe/post-json?u=f47a9bf63c687219a336b35ed&amp;id=d68066abca&';
  public error = '';
  public submitted = false;

  public bottomMenuItems: { name: string; path: string }[] = [
    { name: 'Copyrights', path: '/copyrights' },
    { name: 'Privacy & Security', path: '/privacy-and-security' },
    { name: 'Sitemap', path: '/sitemap' },
    { name: 'Terms of Use', path: '/terms-of-use' }
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
    { name: 'Faq', path: '/faq' },
    { name: 'Glossary', path: '/glossary' },
    { name: 'Partnerships', path: '/partnerships' }
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

  // TODO: Add hidden captcha on submit.
  // TODO: Make this a separated service.
  public onSubmit(): void {
    const params = new HttpParams()
      .set('EMAIL', this.formControlEmail.value)
      .set('b_f47a9bf63c687219a336b35ed_d68066abca', ''); // Hidden input. Make sure the environmental variable is a string.
    const urlMailChimp = this.endpointMailChimp + params.toString();

    this.httpClient.jsonp<ResponseMailChimp>(urlMailChimp, 'c').subscribe(
      response => {
        if (response.result && response.result !== 'error') {
          this.submitted = true;
          alert('Thank you for subscribing into our list.'); // TODO: Make this a SweetAlert (as any other user interaction).
        } else {
          this.error = response.msg;
          console.error(this.error);
          alert('An error with response occured, our apologizes.'); // TODO: Make this a SweetAlert (as any other user interaction).
        }
      },
      error => {
        console.error(error);
        alert('An error occured, our apologizes.'); // TODO: Make this a SweetAlert (as any other user interaction).
      }
    );
    this.formControlEmail.reset(); // Reset the mail input.
  }
}
