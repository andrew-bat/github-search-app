import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HomePageComponent} from './home-page/home-page.component';
import {SearchFormComponent} from './home-page/search-form/search-form.component';
import {RepositoryListModule} from '../shared/repository-list/repository-list.module';


@NgModule({
  declarations: [
    HomePageComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: HomePageComponent}
    ]),
    RepositoryListModule
  ]
})
export class HomeModule {
}
