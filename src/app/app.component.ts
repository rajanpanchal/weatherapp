import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mwa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'my_weather_app';
}
