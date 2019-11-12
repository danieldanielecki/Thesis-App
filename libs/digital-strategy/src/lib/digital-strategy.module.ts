import { DigitalStrategyComponent } from './digital-strategy/digital-strategy.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@libs/shared/src/index';

@NgModule({
  declarations: [DigitalStrategyComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: DigitalStrategyComponent }]),
    SharedModule
  ]
})
export class DigitalStrategyModule {}
