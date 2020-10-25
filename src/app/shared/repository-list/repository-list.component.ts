import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IOrigin} from '../models/origin.model';
import {RemoteService} from '../services/remote.service';
import {Subject} from 'rxjs';
import {IRepository} from '../models/repository.model';
import {debounceTime, map, pluck, takeUntil} from 'rxjs/operators';
import {LocalService} from '../services/local.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit, OnDestroy {

  @Input() public origin: IOrigin;
  @Input() public searchQuery$: Subject<string>;
  public repositories: IRepository[];
  private destroy$ = new Subject<void>();

  constructor(private remoteService: RemoteService,
              private localService: LocalService) {
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
    this.repositories = this.localService.getList();
  }

  private getRemoteData(query?: string): void {
    this.remoteService.getList(query)
      .pipe(
        pluck('items'),
        map(remoteRepositories => {
          const localRepositories: IRepository[] = this.localService.getList();
          return remoteRepositories.map((remote: IRepository) => {
            remote.favorited = localRepositories.some((local: IRepository) => remote.id === local.id);
            return remote;
          });
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((items: IRepository[]) => {
        this.repositories = items;
      });
  }

  private subSearchQuery(): void {
    if (!this.searchQuery$) {
      return;
    }

    this.searchQuery$
      .pipe(
        debounceTime(1000),
        takeUntil(this.destroy$)
      )
      .subscribe(query => {
        this.getRemoteData(query);
      });
  }

  doRemove(): void {
    this.getLocalData();
  }
}
