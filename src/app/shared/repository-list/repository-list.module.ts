import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RepositoryItemComponent} from './repository-item/repository-item.component';
import {RepositoryListComponent} from './repository-list.component';


@NgModule({
  declarations: [
    RepositoryListComponent,
    RepositoryItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RepositoryListComponent,
    RepositoryItemComponent
  ]
})
export class RepositoryListModule { }
