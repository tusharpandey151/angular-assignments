import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router'
import { Observable } from 'rxjs';
import {AuthService} from './auth.service'

@Injectable({providedIn:'root'})
export class AuthGuardService implements CanActivate, CanActivateChild {
    
    constructor(private authService: AuthService, private router:Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       console.log('Can Activate Called')
        return this.authService.isAuthenticated().then(
            (authenticated:boolean) => {
                if(authenticated) {
                    return authenticated;
                }
                else {
                    this.router.navigate(['/']);
                }
            }
        )
    
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       return this.canActivate(route, state);
    }

}