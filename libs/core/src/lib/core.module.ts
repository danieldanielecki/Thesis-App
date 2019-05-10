import { NgModule, Optional, SkipSelf } from '@angular/core';
import { UtilitiesModule } from '@libs/utilities/src/index';

@NgModule({
  imports: [UtilitiesModule],
  exports: [UtilitiesModule]
})
export class CoreModule {
  // Throw an error once CoreModule will be imported somewhere else in order to prevent from importing it more than once in the whole application.
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        `CoreModule has already been loaded. Import Core modules in the AppModule only.`
      );
    }
  }
}
