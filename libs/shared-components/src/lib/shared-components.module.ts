import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { MomentModule } from 'ngx-moment';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {
  faBehance,
  faDribbble,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
  faAt,
  faHome,
  faInfoCircle,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    FontAwesomeModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MomentModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [FooterComponent, HeaderComponent],
  exports: [FooterComponent, HeaderComponent]
})
export class SharedComponentsModule {
  public constructor() {
    library.add(faAt);
    library.add(faBehance);
    library.add(faDribbble);
    library.add(faFacebookF);
    library.add(faHome);
    library.add(faInstagram);
    library.add(faInfoCircle);
    library.add(faLinkedinIn);
    library.add(faPhone);
    library.add(faTwitter);
  }
}
