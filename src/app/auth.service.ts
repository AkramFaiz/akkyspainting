import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as fireB from 'firebase';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  userOb: Observable<fireB.User>;

  googleProvider = new fireB.auth.GoogleAuthProvider();
  constructor(private userServ:UserService,private afAuth:AngularFireAuth,private actRoute:ActivatedRoute,private router:Router) {
    this.userOb =  afAuth.authState;
    console.log(this.userOb);
   }

  login(type:number){
    if(type == 1){
      let returnURL = this.actRoute.snapshot.queryParamMap.get('returnUrl') || '/';
      localStorage.setItem('returnUrl',returnURL);
      this.afAuth.auth.signInWithRedirect(this.googleProvider);
    }
  }
  logout(){
    this.afAuth.auth.signOut();
  }
  get authObs(){
    return this.userOb
    .switchMap(result => {
      if(result) return this.userServ.get(result.uid);

      return Observable.of(null);
    })
  }
}

// this.afAuth.auth.signInWithRedirect(this.googleProvider).then(result =>{
//   if(result.user){
//     console.log(result.user);
//   }
// });