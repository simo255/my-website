import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';  
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { MarkdownModule } from 'ngx-markdown';
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
     importProvidersFrom(
      MarkdownModule.forRoot() // ✅ Add this line
    )
  ]
}).catch((err) => console.error(err));
