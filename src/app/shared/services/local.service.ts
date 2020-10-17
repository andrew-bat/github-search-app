import {Injectable} from '@angular/core';
import {IRepository} from '../models/repository.model';


@Injectable({
  providedIn: 'root'
})
export class LocalService {
  private readonly key = 'github-search-app';

  constructor() {
  }

  public getList(): IRepository[] {
    return this.readStorage();
  }

  public removeItems(repository: IRepository): void {
    const repositories = this.readStorage();
    const filteredRepositories = repositories.filter(r => r.id !== repository.id);

    this.writeStorage(filteredRepositories);
  }

  public addToFavorites(repository: IRepository): void {
    const repositories = this.readStorage();
    const isExist = repositories.some(r => r.id === repository.id);

    if (isExist) {
      return;
    }
    repositories.push(repository);

    this.writeStorage(repositories);
  }

  private readStorage(): IRepository[] {
    const items = localStorage.getItem(this.key);

    if (!items) {
      return [];
    }
    const parseItems = JSON.parse(items);

    return parseItems.length ? parseItems : [];
  }

  private writeStorage(repositories: IRepository[]): void {
    const value = JSON.stringify(repositories);
    localStorage.setItem(this.key, value);
  }

  private addLocalStorage(): void {
  }
}