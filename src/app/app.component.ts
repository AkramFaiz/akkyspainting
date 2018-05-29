import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ISubscription } from "rxjs/Subscription";
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  private subscription: ISubscription;

  constructor(private authServ:AuthService,private router:Router,private userServ:UserService){
    this.subscription = this.authServ.userOb.subscribe( user =>{
      if(user) {
        userServ.save(user);

        let link = localStorage.getItem('returnUrl');
                console.log(link);
        if(link){
          localStorage.removeItem('returnUrl');
          router.navigateByUrl(link);
        }       
      }
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
