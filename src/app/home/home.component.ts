import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, filter, map, switchMap, take } from 'rxjs';
import { UnitsEnum } from '../enums/units.enum';
import { SearchService } from '../services/search.service';

import { StoreService } from '../services/store.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'mwa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  cityWeather$ = this._storeService.cityWeatherList$;
  temperatureUnit$ = this._route.queryParamMap.pipe(
    map((paramMap) => paramMap.get('temp'))
  );

  constructor(
    private _weatherService: WeatherService,
    private _storeService: StoreService,
    private _searchService: SearchService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._initCityList();
  }

  onCitySelected(id: string) {
    this._weatherService
      .getCityWeather(id, UnitsEnum.FARENHIET)
      .subscribe((city) => this._storeService.setCityWeather(city));
  }

  deleteWeatherCard(id: number) {
    this._storeService.deleteCityWeather(id);
  }

  private _initCityList() {
    this.cityWeather$
      .pipe(
        take(1),
        filter((list) => !list.length),
        switchMap(() =>
          combineLatest([
            this._searchService.getCityDataByZip('10001, US'),
            this._searchService.getCityDataByZip('94102, US'),
            this._searchService.getCityDataByZip('60605, US'),
          ])
        ),
        map((calls) => calls.map((call) => call.list[0]))
      )
      .subscribe((cities) => {
        cities.forEach((city) => this._storeService.setCityWeather(city));
      });
  }
}
