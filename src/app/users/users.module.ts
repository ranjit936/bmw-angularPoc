import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page/user-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [UserPageComponent],
  imports: [
    CommonModule,
   FormsModule ,
   RouterModule
  ]
})
export class UsersModule { }
