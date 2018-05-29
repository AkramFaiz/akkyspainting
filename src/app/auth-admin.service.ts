import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthAdminGuardService implements CanActivate {

  constructor(private auth:AuthService,private userServ:UserService) { }
  canActivate(): Observable<boolean>{
      return this.auth.authObs
      .map(AppUser => AppUser.isAdmin);
  }
}
