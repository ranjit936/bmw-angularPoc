import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.less']
})
export class WelcomePageComponent implements OnInit {
  title = 'bmw-angularPoc';
  pageTitle: string = 'BMW-FUNDUS';
  message: string = '#StayHome. StaySafe..'
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(["login"]);

  }
}
