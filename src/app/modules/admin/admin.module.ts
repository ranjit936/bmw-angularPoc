import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { AddUserPageComponent } from './add-user-page/add-user-page.component';
import { DeleteUserPageComponent } from './delete-user-page/delete-user-page.component';
import { ChangeRolePageComponent } from './change-role-page/change-role-page.component';



@NgModule({
  declarations: [AdminPageComponent, AddUserPageComponent, DeleteUserPageComponent, ChangeRolePageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule 
  ]
})
export class AdminModule { }
