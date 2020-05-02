import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from "@angular/material/dialog";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@NgModule({
  declarations: [],
  
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatSlideToggleModule,
    FormsModule
    ],
    exports: [
    CommonModule,
     MatButtonModule, 
     MatInputModule, 
     MatDialogModule,
     MatCardModule,
    MatSlideToggleModule,

     ]
})
export class SharedModule {
}
