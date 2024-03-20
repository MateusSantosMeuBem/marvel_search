import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { LucideAngularModule, Search } from 'lucide-angular';
import { MarvelService } from './services/marvel.service';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideClientHydration(),
    importProvidersFrom(LucideAngularModule.pick({ Search })),
    MarvelService,  // Check if it is necessary
    importProvidersFrom(HttpClientModule),
    provideHttpClient(withFetch()), // Check if it is necessary
  ]
  /** Solution from: https://cursos.alura.com.br/forum/topico-error-nullinjectorerror-r3injectorerror-339908 */
};
