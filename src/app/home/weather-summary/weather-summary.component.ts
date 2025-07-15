import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UnitsEnum } from 'src/app/enums/units.enum';
import { IWeatherGeo } from 'src/app/interfaces/weather-geo';

@Component({
  selector: 'mwa-weather-summary',
  templateUrl: './weather-summary.component.html',
  styleUrls: ['./weather-summary.component.css'],
})
export class WeatherSummaryComponent {
  @Input() weather!: IWeatherGeo;
  @Input() tempUnit!: string | null;

  @Output() newItemEvent = new EventEmitter<number>();

  units = UnitsEnum;

  delete(id: number) {
    this.newItemEvent.emit(id);
  }
}
