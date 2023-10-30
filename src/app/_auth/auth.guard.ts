import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../Service/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:UserAuthService,private router:Router){}

  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ):Observable<boolean | UrlTree> | Promise<boolean | UrlTree>|boolean | UrlTree{
    if(this.authService.getToken() != null){
      return true
    }
    this.router.navigate(['/login'])
    return false;
  }
}