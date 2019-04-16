import { Component } from '@angular/core';
import { Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted: boolean | null = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  public bottomMenuItems: { name: string; path: string }[] = [
    { name: 'Copyrights', path: 'copyrights' },
    { name: 'Privacy & Security', path: 'privacy-and-security' },
    { name: 'Sitemap', path: 'sitemap' },
    { name: 'Terms of Use', path: 'terms-of-use' }
  ];
  public emailFormControl: FormControl = new FormControl('', [
    Validators.email,
    Validators.required
  ]);
  // TODO: Add content to display.
  public informationItems: { content: string; icon: string; name: string }[] = [
    { content: 'Oxford Street 12', icon: 'home', name: 'Address' },
    { content: '+123456789', icon: 'call', name: 'Phone number' },
    { content: 'contact@mail.com', icon: 'mail-open', name: 'Email' },
    {
      content: 'Tax ID: 554433',
      icon: 'information-circle-outline',
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

  public matcher: MyErrorStateMatcher = new MyErrorStateMatcher();
}
