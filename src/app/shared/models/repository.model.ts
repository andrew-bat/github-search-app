export interface IOwner {
  avatar_url: string;
}

export interface IRepository {
  id: number;
  full_name: string;
  owner: IOwner;
  description: string;
  forks_count: number;
  language: string;
  html_url: string;
}
