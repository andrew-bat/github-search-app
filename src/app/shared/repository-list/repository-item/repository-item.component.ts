import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import {IOrigin} from '../../models/origin.model';
import {IRepository} from '../../models/repository.model';
import {LocalService} from '../../services/local.service';

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.scss']
})
export class RepositoryItemComponent {

  @Input() public origin: IOrigin;
  @Input() public repository: IRepository;
  @Output() public onRemove = new EventEmitter<void>();
  public originEnum = IOrigin;
  public added: boolean;

  constructor(private localService: LocalService) {
  }

  public doAdd(): void {
    this.added = true;

    this.localService.addToFavorites(this.repository);
  }

  public doRemove(): void {
    this.added = false;
    this.localService.removeItems(this.repository);

    this.onRemove.emit();
  }

}
