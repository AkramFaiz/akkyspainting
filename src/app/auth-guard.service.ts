import { Injectable } from '@angular/core';
import { CanActivate, Route, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authServ:AuthService,private route:Router) { }
  canActivate(route,state:RouterStateSnapshot){
    return this.authServ.userOb.map(user => {
      if(user) return true;

      this.route.navigate(['/login'],{queryParams:{ returnUrl:state.url }});
      return false;
    })
  }
}
