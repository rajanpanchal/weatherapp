import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, filter, map, of, startWith, switchMap } from 'rxjs';
import { UnitsEnum } from '../enums/units.enum';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'mwa-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityComponent {
  units = UnitsEnum;

  cityWeather$ = this._route.paramMap.pipe(
    map((paramMap) => paramMap.get('id') || ''),
    filter((id) => id.length > 0),
    switchMap((id) =>
      this._weatherService
        .getCityWeather(id, UnitsEnum.FARENHIET)
        .pipe(catchError(() => of()))
    )
  );

  queryParams$ = this._route.queryParamMap.pipe(
    map((paramMap) => paramMap.get('temp') || ''),
    map((temp) => (temp === 'metric' ? UnitsEnum.CELCIUS : UnitsEnum.FARENHIET))
  );

  constructor(
    private _weatherService: WeatherService,
    private _route: ActivatedRoute
  ) {}
}
