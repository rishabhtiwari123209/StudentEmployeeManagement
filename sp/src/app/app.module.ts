import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, Route } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDashComponent } from './dashboard/student-dash/student-dash.component';
import { TeacherDashComponent } from './dashboard/teacher-dash/teacher-dash.component';
import { HeaderComponent } from './tools/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { TeacherProfileComponent } from './pages/teacher-profile/teacher-profile.component';
import { EmployProfileComponent } from './pages/employ-profile/employ-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';




//material uii
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatDialogModule } from '@angular/material/dialog';
import { DialogElementsExampleDialogComponent } from './dashboard/tools/dialog-elements-example-dialog/dialog-elements-example-dialog.component';
// import { } from '@angular/material/';


@NgModule({
  declarations: [
    AppComponent,
    StudentDashComponent,
    TeacherDashComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    StudentProfileComponent,
    TeacherProfileComponent,
    EmployProfileComponent,
    AppNavigationComponent,
    DialogElementsExampleDialogComponent
  ],
  imports: [
    BrowserModule, RouterModule, FormsModule,
    AppRoutingModule, HttpClientModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, MatMomentDateModule,
    // material
    MatInputModule, MatFormFieldModule, MatDatepickerModule, MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
