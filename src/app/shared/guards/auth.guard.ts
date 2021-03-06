import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private authService: AuthService) {
  }

  public canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
