import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './users/user-page/user-page.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


const appRoutes: Routes = [
  { path: 'User', component: UserPageComponent },
  { path: 'Admin', component: AdminPageComponent },
  { path: 'Welcome', component: WelcomePageComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', redirectTo: 'Home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


