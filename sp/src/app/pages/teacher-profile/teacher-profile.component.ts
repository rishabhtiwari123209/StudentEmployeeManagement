import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from 'src/app/dashboard/tools/services/employee.service';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent {
  @Input() employee: Employee;
  @Output() onRemoveEmployee = new EventEmitter<number>();
  @Output() onEditEmployee = new EventEmitter<number>();

  constructor(private employeeService: EmployeeService) {    
    this.employee = {
      _id:0,
      firstname: '',
      lastname: '',
      birthdate: '',
      gender: '',
      education: '',
      company: '',
      jobExperience: 0,
      salary: 0,
      profile: '',
    };

  }

  ngOnInit(): void {
    console.log(this.employee);
  }

  deleteEmployeeClicked(id:any,fs:any) {
    this.onRemoveEmployee.emit(this.employee._id);
    this.employeeService.deleteEmployee(this.employee.firstname).subscribe((res) => {
      console.log(res)
      window.location.reload();
    });
    console.log(this.employee.firstname)
  }

  editEmployeeClicked() {
    this.onEditEmployee.emit(this.employee._id);
  }
}
