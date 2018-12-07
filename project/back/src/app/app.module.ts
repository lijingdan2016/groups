import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule,Router}  from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HshDlComponent } from './components/hsh-dl/hsh-dl.component';
import { HshWjglComponent } from './components/hsh-wjgl/hsh-wjgl.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SidebarComponent,
    HshDlComponent,
    HshWjglComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'users',component:UsersComponent},
      {path:'sidebar',component:SidebarComponent},
      {path:'wjgl',component:HshWjglComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
