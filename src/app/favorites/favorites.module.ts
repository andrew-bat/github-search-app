import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {FavoritesPageComponent} from './favorites-page/favorites-page.component';


@NgModule({
  declarations: [FavoritesPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: FavoritesPageComponent}
    ])
  ]
})
export class FavoritesModule {
}
