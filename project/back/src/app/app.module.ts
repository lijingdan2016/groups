import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule,Router}  from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardsComponent } from './components/cards/cards.component';
import { SystemComponent } from './components/system/system.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SidebarComponent,
    CardsComponent,
    SystemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'users',component:UsersComponent},
      {path:'cards',component:CardsComponent},
      {path:'system',component:SystemComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
