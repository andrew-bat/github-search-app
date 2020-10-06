import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IHttpResponse} from '../models/http.model';

const API_URL = 'https://api.github.com/search/repositories';

@Injectable()
export class RemoteService {

  constructor(private http: HttpClient) {
  }

  public getList(query: string): Observable<IHttpResponse> {
    const params = {q: query};

    return this.http.get<IHttpResponse>(API_URL, {params});
  }

}
