import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// import {MatDialog} from '@angular/material'


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    if(this.username == 'admin' && this.password == 'admin'){
      this.router.navigate(["Admin"]);
     }
     else if(this.username == 'user' && this.password == 'user'){
      this.router.navigate(["User"]);
     }
     else {
       alert("Invalid credentials. use 'admin' ");
     }
   }
  }

