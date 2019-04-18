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
