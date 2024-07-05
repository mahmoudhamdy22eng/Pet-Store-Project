import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private auth:ApiService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url:string = state.url;
    return this.CheckUserLogin(route,url);
  }

  CheckUserLogin(route: ActivatedRouteSnapshot,url:any):boolean{
    if(this.auth.IsLoggedIn()){
      const userRole = this.auth.getRole();
      if(route.data['role'] && route.data['role'].indexOf(userRole) === -1){
        if (userRole == 1) {
          this.router.navigate(['dashboard']);
        }else{
          this.router.navigate(['login']);
        }
        return false;
      }
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}