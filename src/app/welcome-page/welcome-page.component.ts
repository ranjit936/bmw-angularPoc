import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.less']
})
export class WelcomePageComponent implements OnInit {
  title = 'bmw-angularPoc';
  pageTitle: string = 'BMW-FUNDUS';
  constructor() { }

  ngOnInit(): void {
  }

}
