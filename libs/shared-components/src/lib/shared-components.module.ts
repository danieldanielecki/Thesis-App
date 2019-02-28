import { 
  MatButtonModule, 
  MatIconModule, 
  MatListModule, 
  MatSidenavModule, 
  MatToolbarModule } 
from '@angular/material';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
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
