import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnitsEnum } from '../enums/units.enum';
import { IWeatherGeo } from '../interfaces/weather-geo';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private _apiService: ApiService) {}

  getCityWeather(id: string, tempUnits: UnitsEnum) {
    const params = new HttpParams().set('id', id).set('units', tempUnits);

    return this._apiService.getData<IWeatherGeo>('weather', params);
  }
}
