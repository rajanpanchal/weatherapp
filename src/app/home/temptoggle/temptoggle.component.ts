import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { UnitsEnum } from 'src/app/enums/units.enum';

@Component({
  selector: 'mwa-temptoggle',
  templateUrl: './temptoggle.component.html',
  styleUrls: ['./temptoggle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemptoggleComponent {
  constructor(private _router: Router, private _route: ActivatedRoute) {}

  setSelectedTempUnit(value: MatSlideToggle) {
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { temp: value.checked ? UnitsEnum.CELCIUS : null },
      queryParamsHandling: 'merge',
    });
  }
}
