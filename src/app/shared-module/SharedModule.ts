import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from "@angular/material/dialog";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [LoginPageComponent],
  
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    FormsModule
    ],
    exports: [
    CommonModule,
     MatButtonModule, 
     MatInputModule, 
     MatDialogModule,
     MatCardModule
     ]
})
export class SharedModule {
}
