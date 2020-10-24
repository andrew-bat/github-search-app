import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {switchMap} from 'rxjs/operators';

const LOGIN = 'user';
const PASSWORD = 'user';

@Injectable()
export class AuthService {
  public readonly key = 'token';

  constructor() {
  }

  public login(login: string, pass: string): Observable<void> {
    return this.mockAuthRequest(login, pass)
      .pipe(
        switchMap((token: string) => {
          this.writeToken(token);
          return of(null);
        })
      );
  }

  private mockAuthRequest(login: string, pass: string): Observable<string> {
    if (login === LOGIN && pass === PASSWORD) {
      return of('Mock token!');
    } else {
      return throwError('Wrong login or password!');
    }
  }

  private readToken(): string {
    return localStorage.getItem(this.key);
  }

  private writeToken(token: string): void {
    localStorage.setItem(this.key, token);
  }
}
