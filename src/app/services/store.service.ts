import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWeatherGeo } from '../interfaces/weather-geo';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _cityWeather$ = new BehaviorSubject<IWeatherGeo[]>([]);
  private _localStorageKey = 'cityWeatherList';

  get cityWeatherList$() {
    return this._cityWeather$.asObservable();
  }

  constructor() {
    this._cityWeather$.next(this._getListFromLocalStorage());
  }

  setCityWeather(city: IWeatherGeo) {
    const res = this._cityWeather$.getValue();
    res.push(city);

    const newList = [...res];

    this._cityWeather$.next(newList);
    this._setListInLocalStorage(newList);
  }

  private _setListInLocalStorage(list: IWeatherGeo[]) {
    localStorage.setItem(this._localStorageKey, JSON.stringify(list));
  }

  private _getListFromLocalStorage() {
    const currentStorageValue = localStorage.getItem(this._localStorageKey);

    return currentStorageValue ? JSON.parse(currentStorageValue) : [];
  }

  deleteCityWeather(id: number) {
    const res = this._cityWeather$.getValue();
    const filteredResults = res.filter((city) => city.id !== id);

    this._cityWeather$.next(filteredResults);
    this._setListInLocalStorage(filteredResults);
  }
}
