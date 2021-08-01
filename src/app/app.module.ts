import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { WebcamModule } from 'ngx-webcam';
import { FacebookModule } from 'ngx-facebook';
import { ArchwayComponent } from './FrontEnd/archway/archway.component';
import { AdminLayoutComponent } from './BackEnd/admin-layout/admin-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './BackEnd/components/navbar/navbar.component';
import { SidebarComponent } from './BackEnd/components/sidebar/sidebar.component';
import { FooterComponent } from './BackEnd/components/footer/footer.component';
import { DashboardComponent } from './BackEnd/admin/dashboard/dashboard.component';
import { LoginComponent } from './Auth/login/login.component';
import { AboutComponent } from './FrontEnd/about/about.component';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';

@NgModule({
  declarations: [
    AppComponent,
    ArchwayComponent,
    AdminLayoutComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    AboutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    YouTubePlayerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    WebcamModule,
    FacebookModule,
    AngularFireAnalyticsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
