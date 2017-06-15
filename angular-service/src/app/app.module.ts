import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FristListviewComponent } from './frist-listview/frist-listview.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeService } from './home/home.service';
import { FristListviewService } from './frist-listview/frist-listview.service';

@NgModule({

  declarations: [
    AppComponent,
    FristListviewComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'product',
        component: FristListviewComponent

      }, {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    HomeService,
    FristListviewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
