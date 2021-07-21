import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { AuthNavComponent } from '../components/auth-nav/auth-nav.component';
import { AuthenticationButtonComponent } from '../components/authentication-button/authentication-button.component';
import { LoginButtonComponent } from '../components/login-button/login-button.component';
import { LogoutButtonComponent } from '../components/logout-button/logout-button.component';

import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AuthNavComponent,
    AuthenticationButtonComponent,
    LoginButtonComponent,
    LogoutButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // 👇 add and initialize AuthModule
    AuthModule.forRoot({
      domain: 'dfin-sandbox.auth0.com',
      clientId: 'qgTgoNG7eMQCf2hL4m5OZDZmagAAaVsV'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
