import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as fireB from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  googleProvider = new fireB.auth.GoogleAuthProvider();
  constructor(private afAuth:AngularFireAuth) { }
  login(){
    this.afAuth.auth.signInWithRedirect(this.googleProvider).then(result =>{
      if(result.user){
        console.log(result.user);
      }
    });
  }

}
