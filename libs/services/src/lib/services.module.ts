import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { SharedModule } from '@libs/shared/src/index';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: ServicesComponent }]),
    SharedModule
  ]
})
export class ServicesModule {}
