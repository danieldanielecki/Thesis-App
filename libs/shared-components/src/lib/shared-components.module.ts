import { 
  MatButtonModule, 
  MatIconModule, 
  MatListModule, 
  MatSidenavModule, 
  MatToolbarModule } 
from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent,
    MatButtonModule, 
    MatIconModule, 
    MatListModule, 
    MatSidenavModule, 
    MatToolbarModule
  ]
})
export class SharedComponentsModule {}
