import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const config = {
  providers: [provideRouter(routes)],
};

