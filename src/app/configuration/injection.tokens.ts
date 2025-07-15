import { InjectionToken } from '@angular/core';

export const BASE_URL = new InjectionToken<string>('openWeatherBaseUrl');
export const GEO_CODE = new InjectionToken<string>('openWeatherGeoCode');
export const DATA_CODE = new InjectionToken<string>('openWeatherDataCode');
export const API_KEY = new InjectionToken<string>('openWeatherApiKey');
export const ICON_BASE_URL = new InjectionToken<string>(
  'openWeatherIconBaseUrl'
);
