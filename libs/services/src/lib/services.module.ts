import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [ServicesComponent],
  imports: [RouterModule.forChild([{ path: '', component: ServicesComponent }])]
})
export class ServicesModule {}
