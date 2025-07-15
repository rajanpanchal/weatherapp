import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { CityRoutingModule } from './city-routing.module';
import { CityComponent } from './city.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [CityComponent],
  imports: [
    CityRoutingModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    NgOptimizedImage,
    PipesModule,
  ],
})
export class CityModule {}
