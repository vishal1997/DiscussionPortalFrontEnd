import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    private loggedIn = new BehaviorSubject<boolean>(false);

    get isLoggedIn() {
        return this.loggedIn.asObservable(); // {2}
      }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (window.localStorage.getItem('userId')) {
            // logged in so return true
            this.loggedIn.next(true);
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigateByUrl("/login", { queryParams: { returnUrl: state.url }});
        this.loggedIn.next(false);
        return false;
    }
}