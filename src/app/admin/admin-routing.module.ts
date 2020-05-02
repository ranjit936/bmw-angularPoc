import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddUserPageComponent } from './add-user-page/add-user-page.component';
import { DeleteUserPageComponent } from './delete-user-page/delete-user-page.component';
import { ChangeRolePageComponent } from './change-role-page/change-role-page.component';



const appRoutes: Routes = [
      { path: 'adminHome', component: AdminPageComponent },
      { path: 'addUser', component: AddUserPageComponent },
      { path: 'deleteUser', component: DeleteUserPageComponent },
      { path: 'changeRole', component: ChangeRolePageComponent },
      { path:'', component:AdminPageComponent }
    ];


@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


