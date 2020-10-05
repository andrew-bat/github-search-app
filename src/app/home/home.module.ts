import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HomePageComponent} from './home-page/home-page.component';
import {SearchFormComponent} from './home-page/search-form/search-form.component';
import {RepositoryListComponent} from './home-page/repository-list/repository-list.component';
import {RepositoryItemComponent} from './home-page/repository-list/repository-item/repository-item.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SearchFormComponent,
    RepositoryListComponent,
    RepositoryItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: HomePageComponent}
    ])
  ]
})
export class HomeModule {
}
