import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.less']
})
export class AdminPageComponent implements OnInit {

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  isAddUser = false;
  isAdminHome: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  getUserDetails() { 
    this.router.navigate(["UserPage"]);

  }
  addUser() {
    this.isAddUser = true;
    this.isAdminHome = false;
  }
  onClickAdminHome() {
    this.isAdminHome = true;
    this.isAddUser = false;

  }
  deleteUser() { }
  changeUserRole() { }
  

}
