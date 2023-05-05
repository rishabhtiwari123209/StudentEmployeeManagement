import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashComponent } from './dashboard/student-dash/student-dash.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { EmployProfileComponent } from './pages/employ-profile/employ-profile.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'StudentDash', component: StudentDashComponent },
  { path: 'employee', component: EmployProfileComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
