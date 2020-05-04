import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-page/login-routing.module';
import { SharedModule } from '../shared-module/SharedModule';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    LoginRoutingModule,
    
  ]
})
export class LoginModule { }
