import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import {
  API_KEY,
  BASE_URL,
  DATA_CODE,
  GEO_CODE,
  ICON_BASE_URL,
} from './configuration/injection.tokens';
import { ImageLoaderConfig, IMAGE_LOADER } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: BASE_URL, useValue: environment.openWeatherBaseUrl },
    { provide: GEO_CODE, useValue: environment.openWeatherGeoCode },
    { provide: DATA_CODE, useValue: environment.openWeatherDataCode },
    { provide: API_KEY, useValue: environment.openWeatherApiKey },
    { provide: ICON_BASE_URL, useValue: environment.openWeatherIconBaseUrl },
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `${environment.openWeatherIconBaseUrl}${config.src}@${
          config.loaderParams || '2x'
        }.png`;
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
