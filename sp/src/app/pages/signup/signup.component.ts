import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { StudentDataService } from 'src/app/tools/services/student-data.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DialogElementsExampleDialogComponent } from '../../dashboard/tools/dialog-elements-example-dialog/dialog-elements-example-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

  constructor(private auth: StudentDataService, public dialog: MatDialog) { }
  hide = true;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new ErrorStateMatcher();
  toast = false
  err = "";
  e=false
  displayerr=false
  login(pass: HTMLInputElement, email: HTMLInputElement, username: HTMLInputElement, lastname: HTMLInputElement, dob: HTMLInputElement) {
    // if (username.value.trim().length == 0 || pass.value.trim().length == 0 || email.value.trim().length == 0 || lastname.value.trim().length == 0) {
    //   this.err = "all field is mendatory";
    // } else {
      if(
        !this.emailFormControl.hasError('required')&&
         pass.value.trim().length >= 8 &&
          email.value.trim().length >= 8 &&
          lastname.value.trim().length == 10
          ){this.e=true;
          
            this.err = "";
            let data = {
              "password": pass.value, "username": username.value, "email": email.value, "lastname": lastname.value, "dob": dob.value
            }
            let res = this.auth.signup(data);
            // if (res == true) {
              this.toast = true
              this.dialog.open(DialogElementsExampleDialogComponent);
              pass.value=""
              username.value=""
              email.value=""
              lastname.value=""
              dob.value=""
        



          }
      else{this.displayerr=true}

   
    // }
  }
  }
// }
