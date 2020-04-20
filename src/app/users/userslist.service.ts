import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
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



  // getProduct(id: number): Observable<IProduct | undefined> {
  //   return this.getProducts()
  //     .pipe(
  //       map((products: IProduct[]) => products.find(p => p.productId === id))
  //     );
  // }


}
