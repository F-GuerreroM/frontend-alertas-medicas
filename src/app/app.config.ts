import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// Importaciones de MSAL
import { MsalService, MSAL_INSTANCE, MsalGuard, MsalBroadcastService, MSAL_GUARD_CONFIG, MsalGuardConfiguration } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication, InteractionType } from '@azure/msal-browser';
import { msalConfig } from './auth-config';

// 1. Instancia principal
export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication(msalConfig);
}

// 2. Inicializador
export function MSALInitializeFactory(msalInstance: IPublicClientApplication) {
  return () => msalInstance.initialize();
}

// 3. NUEVO: Configuración del Guard (Lo que Angular estaba pidiendo a gritos)
export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Popup, // Le decimos que el login será una ventana emergente
    authRequest: {
      scopes: ['openid', 'profile'] // Permisos básicos que solicitaremos a Azure
    }
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: APP_INITIALIZER,
      useFactory: MSALInitializeFactory,
      deps: [MSAL_INSTANCE],
      multi: true
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory // <-- Aquí entregamos el proveedor que faltaba
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService
  ]
};