import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    CommonModule,
    RouterModule
    
  ]
})
export class AdminModule { }
