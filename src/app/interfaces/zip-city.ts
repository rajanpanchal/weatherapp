import { IWeatherGeo } from './weather-geo';

export interface IZipCity {
  message: string;
  cod: string;
  count: number;
  list: IWeatherGeo[];
}
