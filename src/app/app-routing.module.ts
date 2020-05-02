import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { IntroductionPageComponent } from './introduction-page/introduction-page.component';
import { HelpComponent } from './help/help.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/Welcome', pathMatch: 'full' },

  {
    path: 'AdminPage',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)

  },
  {
    path:'UserPage',
    loadChildren: ()=> import ('./users/users.module').then(m => m.UsersModule)
  },

  { path: 'Welcome', component: WelcomePageComponent },
  { path: 'intro', component: IntroductionPageComponent },
  { path: 'help', component: HelpComponent },


]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


