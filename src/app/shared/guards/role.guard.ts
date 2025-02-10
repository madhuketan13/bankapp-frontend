import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('userDetails') === null) {
      return false;
    } else {
      let userDetails = JSON.parse(localStorage.getItem('userDetails') || '');
      console.log(userDetails);

      if (userDetails.roles.length > 0) {
        if (userDetails.roles.includes('ROLE_USER')) {
          return true;
        } else {
          this.router.navigate(['/unauthorized']);
          return false;
        }
      }
    }

    return true;
  }
}
