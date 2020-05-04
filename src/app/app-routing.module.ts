import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { IntroductionPageComponent } from './components/introduction-page/introduction-page.component';
import { HelpComponent } from './components/help/help.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/Welcome', pathMatch: 'full' },

  {
    path: 'AdminPage',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)

  },
  {
    path:'UserPage',
    loadChildren: ()=> import ('./modules/users/users.module').then(m => m.UsersModule)
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


