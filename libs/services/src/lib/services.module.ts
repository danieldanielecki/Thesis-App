import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { SharedModule } from './../../../../libs/shared/src/lib/shared.module';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: ServicesComponent }]),
    SharedModule
  ]
})
export class ServicesModule {}
