import { Pipe, PipeTransform } from '@angular/core';
import { UnitsEnum } from '../enums/units.enum';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  private _degreeSign = '\u00B0';
  transform(value: number, unitFrom: UnitsEnum, unitTo: UnitsEnum) {
    if (value && !isNaN(value)) {
      if (unitFrom !== unitTo) {
        if (unitTo === UnitsEnum.CELCIUS) {
          const tempareature = (value - 32) / 1.8;
          return `${tempareature.toFixed(1)}${this._degreeSign}C`;
        }
        if (unitTo === UnitsEnum.FARENHIET) {
          const tempareature = value * 32 + 1.8;
          return `${tempareature.toFixed(1)}${this._degreeSign}F`;
        }
      } else {
        if (unitTo === UnitsEnum.CELCIUS) {
          return `${value.toFixed(1)}${this._degreeSign}C`;
        }
        if (unitTo === UnitsEnum.FARENHIET) {
          return `${value.toFixed(1)}${this._degreeSign}F`;
        }
      }
    }
    return;
  }
}
