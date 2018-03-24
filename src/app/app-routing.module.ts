import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Regular Users
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
//Admin
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { AdminPostPageComponent } from './admin-post-page/admin-post-page.component';

const routes: Routes = [
  {
    path: 'Home',
    component: HomePageComponent
  },
  {
    path: 'About-Me',
    component: AboutMePageComponent
  },
  {
    path: 'Contact',
    component: ContactPageComponent
  },
  { path: 'Blog/:id', 
    component: BlogPageComponent 
  },
  {
    path: 'Admin-Login',
    component: AdminLoginPageComponent
  },
  {
    path: 'Admin-Home',
    component: AdminHomePageComponent
  },
  {
    path: 'Admin-Post',
    component: AdminPostPageComponent
  },
  {
    path: '**',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
