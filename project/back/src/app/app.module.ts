import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule,Router}  from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
<<<<<<< HEAD
import { CardsComponent } from './components/cards/cards.component';

=======
import { SystemComponent } from './components/system/system.component';
>>>>>>> 5b179307814003c66efdea9ac5908bfb7f15796e
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SidebarComponent,
<<<<<<< HEAD
    CardsComponent
=======
    SystemComponent
>>>>>>> 5b179307814003c66efdea9ac5908bfb7f15796e
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'users',component:UsersComponent},
<<<<<<< HEAD
      {path:'cards',component:CardsComponent},
=======
      {path:'system',component:SystemComponent},
>>>>>>> 5b179307814003c66efdea9ac5908bfb7f15796e
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
