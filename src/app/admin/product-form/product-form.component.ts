import { Component, OnInit } from '@angular/core';
import { CatergoryService } from '../../catergory.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  catOb;
  constructor(catergory:CatergoryService) {
      this.catOb = catergory.getCatergory();  
      console.log("cat",this.catOb);
   }
  ngOnInit() {
  }
}
