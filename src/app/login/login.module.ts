import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { SharedModule } from '../shared-module/SharedModule';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-page/login-routing.module';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    LoginRoutingModule,
    AdminModule
  ]
})
export class LoginModule { }
