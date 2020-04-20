import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  }

}
