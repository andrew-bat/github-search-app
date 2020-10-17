import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {RepositoryListModule} from '../shared/repository-list/repository-list.module';

import {FavoritesPageComponent} from './favorites-page/favorites-page.component';


@NgModule({
  declarations: [
    FavoritesPageComponent
  ],
  imports: [
    CommonModule,
    RepositoryListModule,
    RouterModule.forChild([
      {path: '', component: FavoritesPageComponent}
    ])
  ]
})
export class FavoritesModule {
}
