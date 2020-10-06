import {IRepository} from './repository.model';

export interface IHttpResponse {
  total_count: number;
  incomplete_result: boolean;
  items: IRepository[];
}
