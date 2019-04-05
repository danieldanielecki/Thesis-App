import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  DigitalStrategyComponent,
  DigitalStrategyModule
} from '@libs/digital-strategy/src/index';

@NgModule({
  imports: [
    DigitalStrategyModule,
    RouterModule.forChild([
      { path: '', component: DigitalStrategyComponent, pathMatch: 'full' }
    ])
  ]
})
export class DigitalStrategyLazyModule {}
