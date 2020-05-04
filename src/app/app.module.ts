import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "./modules/shared-module/SharedModule";
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IntroductionPageComponent } from './components/introduction-page/introduction-page.component';
import { HelpComponent } from './components/help/help.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    IntroductionPageComponent,
    HelpComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
