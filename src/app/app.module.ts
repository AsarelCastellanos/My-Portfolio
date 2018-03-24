import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

//Regular Users
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
//Admin Pages
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { AdminPostPageComponent } from './admin-post-page/admin-post-page.component';
//Serivces
import { AuthService } from './_services/auth/auth.service';
import { ContactService } from './_services/contact/contact.service';
import { BlogService } from './_services/blog/blog.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutMePageComponent,
    BlogPageComponent,
    ContactPageComponent,
    AdminLoginPageComponent,
    AdminHomePageComponent,
    AdminPostPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    ContactService,
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
