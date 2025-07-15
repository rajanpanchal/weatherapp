import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  of,
  startWith,
  switchMap,
} from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'mwa-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchboxComponent {
  @Output() citySelected = new EventEmitter<string>();

  searchControl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.pattern('/(^d{5}$)|(^d{5}-d{4}$)/')],
  });

  filteredOptions$ = this.searchControl.valueChanges.pipe(
    startWith(''),
    filter((value) => value.length > 4),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap((usZipCode) =>
      this._searchService
        .getCityDataByZip(usZipCode)
        .pipe(catchError(() => of(null)))
    )
  );

  constructor(private _searchService: SearchService) { }

  onCitySelected(event: MatAutocompleteSelectedEvent) {
    this.citySelected.emit(event.option.value.id);
    console.log(event.option.value.id);
    this.searchControl.setValue('');
  }
}
