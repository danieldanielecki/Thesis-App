import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';
import { join } from 'path';
import { Module } from '@nestjs/common';

const BROWSER_DIR = join(process.cwd(), 'dist', 'apps', 'ditectrev-browser');
applyDomino(global, join(BROWSER_DIR, 'index.html'));

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bundle: require('./../dist/apps/ditectrev-server/main'),
      liveReload: true,
      viewsPath: BROWSER_DIR
    })
  ]
})
export class ApplicationModule {}
