import { Component, OnInit } from '@angular/core';
import { StaticInjector } from '@angular/core/src/di/injector';
import * as fireB from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  userOb: Observable<fireB.User>;
 
  constructor(private afAuth:AngularFireAuth) { 
    this.userOb =  afAuth.authState;
    console.log(afAuth.authState);
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}

// afAuth.authState.subscribe(userState => {
//   console.log("User State:",userState);
//   this.username = userState.displayName;
// })

    