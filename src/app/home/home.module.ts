import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page/home-page.component';
import { SearchFormComponent } from './components/search-form/search-form.component';


@NgModule({
  declarations: [HomePageComponent, SearchFormComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule {
}
