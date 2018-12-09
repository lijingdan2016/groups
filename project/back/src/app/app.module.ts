import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule,Router}  from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HshDlComponent } from './components/hsh-dl/hsh-dl.component';
import { HshWjglComponent } from './components/hsh-wjgl/hsh-wjgl.component';
import { ShouyeComponent } from './components/shouye/shouye.component';
import { SystemComponent } from './components/system/system.component';
import { KeysComponent } from './components/keys/keys.component';
// import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SidebarComponent,
    HshDlComponent,
    HshWjglComponent,
    ShouyeComponent,
    SystemComponent,
    KeysComponent,
    // CardsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'users',component:UsersComponent},
      {path:'sidebar',component:SidebarComponent},
      {path:'wjgl',component:HshWjglComponent},
      {path:'shouye',component:ShouyeComponent},
      {path:'system',component:SystemComponent},
      // {path:'cards',component:CardsComponent}
      {path:'keys',component:KeysComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
