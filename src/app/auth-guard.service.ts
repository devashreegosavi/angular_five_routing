import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()

export class AuthGuard {
    /*canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        this.AuthService.isAuthenticated().then(
            (authenticated : boolean) => {
                if(authenticated){
                    return true;
                }
                else{
                    this.router.navigate(['/']);
                }
            }
        );
    }*/

    /*canActivate(): 
    | boolean 
    | UrlTree 
    | Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> {
        this.AuthService.isAuthenticated().then(
            (authenticated : boolean) => {
                if(authenticated){
                    return true;
                }
                else{
                    this.router.navigate(['/']);
                }
            }
        );
    }
*/
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
         this.AuthService.isAuthenticated().then(
            (authenticated : boolean) => {
                if(authenticated){
                    return true;
                }
                else{
                    this.router.navigate(['/']);
                    return false;
                }
            }
        );
  }

    constructor(private AuthService : AuthService, private router : Router){

    }
}