import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.scss']
})
export class RepositoryItemComponent implements OnInit {

  added = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onAdd(): void {
    this.added = !this.added;
  }

}
