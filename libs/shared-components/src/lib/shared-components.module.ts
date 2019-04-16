import {
  MatButtonModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule,
    MatInputModule
  ],
  declarations: [FooterComponent, HeaderComponent],
  exports: [FooterComponent, HeaderComponent]
})
export class SharedComponentsModule {}
