import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let token: any;
    token = localStorage.getItem('authorization');
    console.log('This is the users token: ', token);
  }

  deleteSession() {
    let clearToken: any;
    clearToken = localStorage.clear();
    clearToken = '';
    console.log(clearToken);
  }

}
