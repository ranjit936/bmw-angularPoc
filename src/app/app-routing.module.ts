import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './users/user-page/user-page.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginPageComponent } from './shared-module/login-page/login-page.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'User', component: UserPageComponent },
  { path: 'Admin', component: AdminPageComponent },
  { path: 'Welcome', component: WelcomePageComponent },
  { path: 'UserDetails', component: UserDetailsComponent },
  { path: '', redirectTo: 'Welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'Welcome', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


