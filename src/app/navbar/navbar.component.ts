import { Component, OnInit } from '@angular/core';
import { StaticInjector } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: String;
  constructor() { }

  ngOnInit() {
    this.username= "Andy";
  }

}
