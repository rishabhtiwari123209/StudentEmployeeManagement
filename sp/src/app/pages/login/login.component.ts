import { Component } from '@angular/core';
import { StudentDataService } from 'src/app/tools/services/student-data.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new ErrorStateMatcher();
  err: any; type: any;
  // res:any;
  constructor(private auth: StudentDataService) { }
  onChange(e: any) { this.type = e.target.value; }
  login(email: any, pass: any) {
    // if (email.value.trim().length === 0 || pass.value.trim().length === 0) {
    //   this.err = "fill these fields to Login"
    // }
    // else {
    this.err = "";
    
    let data = { "email": email.value, "password": pass.value, "staus": this.type };
    let res = this.auth.Login2(data);
    // if(this.res!=null){

    // }else{

    // }

    // }
  }
}
