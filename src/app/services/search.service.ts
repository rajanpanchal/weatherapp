import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnitsEnum } from '../enums/units.enum';
import { IZipCity } from '../interfaces/zip-city';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private _apiService: ApiService) {}

  getCityDataByZip(usZipCode: string) {
    const params = new HttpParams()
      .set('q', usZipCode)
      .set('units', UnitsEnum.FARENHIET);

    return this._apiService.getData<IZipCity>('find', params);
  }
}
