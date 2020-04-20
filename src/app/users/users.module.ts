import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page/user-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [UserPageComponent, UserDetailsComponent],
  imports: [
    CommonModule,
   FormsModule ,
   RouterModule
  ]
})
export class UsersModule { }
