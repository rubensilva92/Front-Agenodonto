import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise((resolve) =>
      this.authService
        .UsuarioEstaAutenticado()
        .then(status => {
          if (status === false) {
            this.router.navigate(['home', 'login']);
          }
          resolve(status);
        })
        .catch(() => {
          this.router.navigate(['home', 'login']);
          resolve(false);
        })
    );
  }
}
