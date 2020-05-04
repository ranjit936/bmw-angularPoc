import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;
  sliderChecked:boolean;
  disabled:boolean = false;  
  color: ThemePalette = 'accent';

  constructor(private router: Router) { 
  this.sliderChecked = false;

  }

  ngOnInit(): void {
  }
  onclickSlider(event: MatSlideToggleChange){
    this.sliderChecked = !this.sliderChecked;
  }
  login() {

    if(this.sliderChecked){
      if (this.username == 'admin' && this.password == 'admin') {
        this.router.navigate(["AdminPage"]);
      }else {
        alert("Invalid credentials for admin");
      }
      
    }else if(!this.sliderChecked){
      if (this.username == 'user' && this.password == 'user') {
        this.router.navigate(["UserPage"]);
      }else {
        alert("Invalid credentials for User");
      }
    }
    
  }
}

