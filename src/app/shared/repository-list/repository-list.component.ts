import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IOrigin} from '../models/origin.model';
import {RemoteService} from '../services/remote.service';
import {Subject} from 'rxjs';
import {IRepository} from '../models/repository.model';
import {debounce, debounceTime, pluck, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit, OnDestroy {

  @Input() public origin: IOrigin;
  @Input() public searchQuery$: Subject<string>;
  public repositories: IRepository[];
  private destroy$ = new Subject();

  constructor(private remote: RemoteService) {
  }

  ngOnInit(): void {
    this.definedRepositories();

    this.subSearchQuery();
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  private definedRepositories(): void {
    this.origin === IOrigin.local ? this.getLocalData() : this.getRemoteData();
  }

  private getLocalData(): void {
  }

  private getRemoteData(query?: string): void {
    this.remote.getList(query)
      .pipe(
        pluck('items'),
        takeUntil(this.destroy$)
      )
      .subscribe((items: IRepository[]) => {
        this.repositories = items;
      });
  }

  private subSearchQuery(): void {
    this.searchQuery$
      .pipe(
        debounceTime(1000),
        takeUntil(this.destroy$)
      )
      .subscribe(query => {
        this.getRemoteData(query);
      });
  }

}
