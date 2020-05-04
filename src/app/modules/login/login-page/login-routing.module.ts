import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page.component';

const appRoutes: Routes = [
  { path: '', component: LoginPageComponent },
  {
    path: 'AdminPage',
    loadChildren: () => import('../../admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'UserPage',
    loadChildren: () => import('../../users/users.module').then(m => m.UsersModule)
  },
];


@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }


