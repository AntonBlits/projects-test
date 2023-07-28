import {ApplicationConfig, LOCALE_ID} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import localeRu from '@angular/common/locales/ru';

import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeRu, 'ru');

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), provideHttpClient(), {
    provide: LOCALE_ID,
    useValue: 'ru',
  }]
};
