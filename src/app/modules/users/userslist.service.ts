import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUserModel } from './userModel';



@Injectable({
  providedIn: 'root'
})
export class UsersListService {
  private usersServiceUrl = 'assets/userslist.json';

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<IUserModel[]> {
    return this.http.get<IUserModel[]>(this.usersServiceUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
      );

  // let data= [
  //   {
  //     "userId": 1,
  //     "userName": "Ranjit Kumar",
  //     "projectCode": "GDN-0011",
  //     "role": "Admin",
  //     "designation": "Project Manager",
  //     "team": "Dev Team",
  //     "location": "Pune"
  //   },
    
  //   {
  //     "userId": 10,
  //     "userName": "Pankaj Gorte",
  //     "projectCode": "GMG-0042",
  //     "role": "Admin",
  //     "designation": "SENIOR SOFTWARE ENGINEER",
  //     "team": "Dev Team",
  //     "location": "Pune"
  //   }
  // ]
  // return of (data);
  }




}
