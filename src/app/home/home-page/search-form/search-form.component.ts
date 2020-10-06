import {Component, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Input() public searchQuery$: Subject<string>;


  constructor() {
  }

  ngOnInit(): void {
  }

  public onSearchChange(event: string): void {
    this.searchQuery$.next(event);
  }

}
