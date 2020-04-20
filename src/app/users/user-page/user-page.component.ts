import { Component, OnInit } from '@angular/core';
import { UsersListService } from '../userslist.service';
import { IUserModel } from '../userModel';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.less']
})
export class UserPageComponent implements OnInit {
  filtereduserslist: IUserModel[] = [];
  Userslist: IUserModel[] = [];
  pageTitle:any = 'Welcome To BMW-Fundus Team'

  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filtereduserslist = this.listFilter ? this.performFilter(this.listFilter) : this.Userslist;
  }

  constructor(private userlistService:UsersListService) { }

  ngOnInit(): void {
    this.userlistService.getUsersList().subscribe({
      next: users => {
        this.Userslist = users;
        this.filtereduserslist = this.Userslist;
      },
      // error: err => this.errorMessage = err
    });

  }
  performFilter(filterBy: string): IUserModel[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.Userslist.filter((user: IUserModel) =>
      user.userName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(){}
  
  }


