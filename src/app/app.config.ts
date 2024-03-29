import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-df99e","appId":"1:348535798242:web:b5eaea43da85349221e1bb","storageBucket":"ring-of-fire-df99e.appspot.com","apiKey":"AIzaSyCqIlo9hNYKjM2LWA9bvyZkEFNi6MkrzT0","authDomain":"ring-of-fire-df99e.firebaseapp.com","messagingSenderId":"348535798242"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
