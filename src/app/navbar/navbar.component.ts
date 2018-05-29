import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../app-user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  appUser: AppUser;
  constructor(private authServ:AuthService) { 
    authServ.authObs.subscribe(user => this.appUser = user);
  }

  logout(){
    this.authServ.logout();
  }

}

// afAuth.authState.subscribe(userState => {
//   console.log("User State:",userState);
//   this.username = userState.displayName;
// })

    