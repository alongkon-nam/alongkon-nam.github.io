import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { AdminLayoutComponent } from './BackEnd/admin-layout/admin-layout.component';
import { DashboardComponent } from './BackEnd/admin/dashboard/dashboard.component';
import { MemberComponent } from './BackEnd/admin/member/member.component';
import { AboutComponent } from './FrontEnd/about/about.component';
import { ArchwayComponent } from './FrontEnd/archway/archway.component';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [
  { path: '', component: ArchwayComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin',   component: AdminLayoutComponent ,
     canActivate:[AuthGuard],
     children: [
        { path : '' , component:DashboardComponent},
        { path: 'member', component:MemberComponent }
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [],
})
export class AppRoutingModule { }
