import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomePageComponent} from './home-page/home-page.component';
import {SearchFormComponent} from './home-page/search-form/search-form.component';
import {RepositoryListComponent} from './home-page/repository-list/repository-list.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    HomePageComponent,
    SearchFormComponent,
    RepositoryListComponent
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
