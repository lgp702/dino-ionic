import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { preloaderFinished } from './app/preloader/preloader';
preloaderFinished();

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(res => {
    if ((window as any).appBootstrap) {
      (window as any).appBootstrap();
    }
    return res;
  })
  .catch(err => console.log(err));
