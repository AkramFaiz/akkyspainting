import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CatergoryService {

  constructor(private db:AngularFireDatabase) { }

  getCatergory(){
    return this.db.list('/catergories',{
      query:{
        orderByChild:'type'
      }
    });
  }

}
