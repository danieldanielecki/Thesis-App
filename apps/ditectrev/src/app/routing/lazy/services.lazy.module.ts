import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesComponent, ServicesModule } from '@libs/services/src/index';

@NgModule({
  imports: [
    ServicesModule,
    RouterModule.forChild([
      { path: '', component: ServicesComponent, pathMatch: 'full' }
    ])
  ]
})
export class ServicesLazyModule {}