import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FavoritesPageComponent} from './favorites-page/favorites-page.component';
import {RouterModule} from '@angular/router';


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
