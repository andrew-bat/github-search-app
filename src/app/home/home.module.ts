import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomePageComponent} from './home-page/home-page.component';
import {SearchFormComponent} from './components/search-form/search-form.component';
import { RepositoryListComponent } from './components/repository-list/repository-list.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SearchFormComponent,
    RepositoryListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule {
}
