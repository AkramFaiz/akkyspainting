import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as fireB from 'firebase';
import { AppUser } from './app-user';

@Injectable()
export class UserService {

  constructor(private db:AngularFireDatabase) {
    
   }
   save(user:fireB.User){
     this.db.object('/users/'+user.uid).update({
       name: user.displayName,
      //  isAdmin: false,
       email:user.email
     }).then(result => {
       console.log(result);
     });
   }
   get(uid:string): FirebaseObjectObservable<AppUser>{
      return this.db.object('/users/'+uid);
   }
}
