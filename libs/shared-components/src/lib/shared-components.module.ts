import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { 
  MatButtonModule, 
  MatIconModule, 
  MatListModule, 
  MatSidenavModule, 
  MatToolbarModule } 
from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    NoopAnimationsModule
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
