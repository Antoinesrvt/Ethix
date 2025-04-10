// Type declarations for i18next ecosystem packages that don't have their own TypeScript definitions

// Declaration for i18next-resources-to-backend
declare module 'i18next-resources-to-backend' {
  import { BackendModule } from 'i18next';
  
  type ResourceFetchFunction = (language: string, namespace: string) => Promise<any>;
  
  export default function resourcesToBackend(
    resources: ResourceFetchFunction
  ): BackendModule;
}

// Declaration for i18next-browser-languagedetector
declare module 'i18next-browser-languagedetector' {
  import { DetectorModule } from 'i18next';
  
  interface DetectorOptions {
    order?: string[];
    lookupFromPathIndex?: number;
    caches?: string[];
    cookieExpirationDate?: Date;
    lookupQuerystring?: string;
    lookupCookie?: string;
    lookupLocalStorage?: string;
    lookupSessionStorage?: string;
    lookupFromSubdomainIndex?: number;
    lookupFromNavigator?: boolean;
  }
  
  class LanguageDetector implements DetectorModule {
    constructor(services?: any, options?: DetectorOptions);
    init(services?: any, options?: DetectorOptions): void;
    detect(detectionOrder?: string[]): string | undefined;
    cacheUserLanguage(lng: string): void;
    type: 'languageDetector';
  }
  
  export default LanguageDetector;
}

// Declaration for i18next-http-backend
declare module 'i18next-http-backend' {
  import { BackendModule } from 'i18next';
  
  interface HttpBackendOptions {
    loadPath?: string;
    addPath?: string;
    allowMultiLoading?: boolean;
    parse?: (data: any) => any;
    requestOptions?: RequestInit;
  }
  
  class HttpBackend implements BackendModule {
    constructor(options?: HttpBackendOptions);
    init(services?: any, options?: HttpBackendOptions): void;
    read(language: string, namespace: string, callback: Function): void;
    create?(languages: string[], namespace: string, key: string, fallbackValue: string): void;
    type: 'backend';
  }
  
  export default HttpBackend;
} 