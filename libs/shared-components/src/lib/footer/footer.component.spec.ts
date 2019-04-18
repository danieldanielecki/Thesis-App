import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule
} from '@angular/material';
import { MomentModule } from 'ngx-moment';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from './footer.component';
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

// Font Awesome is a library that requires global setup, thus making it for testing is required too.
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

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        FontAwesomeModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatGridListModule,
        MatInputModule,
        MomentModule,
        ReactiveFormsModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create footer component', () => {
    expect(component).toBeTruthy();
  });
});
