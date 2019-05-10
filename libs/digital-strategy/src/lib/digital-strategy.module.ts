import { DigitalStrategyComponent } from './digital-strategy/digital-strategy.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DigitalStrategyComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: DigitalStrategyComponent }])
  ]
})
export class DigitalStrategyModule {}
