import { Configuration } from '@azure/msal-browser';

export const msalConfig: Configuration = {
  auth: {
    // Tu Id de aplicación (cliente)
    clientId: '0b0ab160-de3c-4db6-bd7c-dd3b67fb3efa',
    
    // Tu inquilino y el flujo de usuario que creaste
    authority: 'https://duoc2026cn1g5.b2clogin.com/duoc2026cn1g5.onmicrosoft.com/B2C_1_susi',
    
    // El dominio que debe reconocer como válido
    knownAuthorities: ['duoc2026cn1g5.b2clogin.com'],
    
    // A dónde vuelve el usuario después de loguearse en Azure
    redirectUri: 'http://localhost:4200/',
  },
  cache: {
    cacheLocation: 'localStorage' // Guarda la sesión aunque recargues la página
  }
};