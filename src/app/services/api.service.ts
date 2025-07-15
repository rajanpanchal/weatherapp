import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  API_KEY,
  BASE_URL,
  DATA_CODE,
  GEO_CODE,
} from '../configuration/injection.tokens';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    @Inject(API_KEY) private _apiKey: string,
    @Inject(BASE_URL) private _baseUrl: string,
    @Inject(GEO_CODE) private _geoCode: string,
    @Inject(DATA_CODE) private _dataCode: string,
    private _http: HttpClient
  ) {}

  getData<T>(dataType: string, additionalParams: HttpParams) {
    const params = additionalParams.append('appid', this._apiKey);

    return this._http.get<T>(`${this._baseUrl}${this._dataCode}${dataType}`, {
      params,
    });
  }

  getDataGeoData<T>(dataType: string, additionalParams: HttpParams) {
    const params = additionalParams.append('appid', this._apiKey);

    return this._http.get<T>(`${this._baseUrl}${this._geoCode}${dataType}`, {
      params,
    });
  }
}
