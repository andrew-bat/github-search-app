import {Component, Input, OnInit} from '@angular/core';

import {IOrigin} from '../../models/origin.model';
import {IRepository} from '../../models/repository.model';

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.scss']
})
export class RepositoryItemComponent implements OnInit {

  @Input() public origin: IOrigin;
  @Input() public repository: IRepository;
  public originEnum = IOrigin;
  private added = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onAdd(): void {
    this.added = !this.added;
  }

}
