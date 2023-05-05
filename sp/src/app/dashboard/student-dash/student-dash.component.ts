import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentDataService } from 'src/app/tools/services/student-data.service';

@Component({
  selector: 'app-student-dash',
  templateUrl: './student-dash.component.html',
  styleUrls: ['./student-dash.component.css']
})
export class StudentDashComponent {
  res: any;
  constructor(private auth: StudentDataService, private router: Router) { }
  // @ViewChild('titleInput')
  // titleInputReference!: ElementRef;
  NgOnInit() {
    // this.auth.profile1().subscribe((result: any) => { this.res = result })
    // console.log(this.router.getCurrentNavigation()?.extras)
    // console.log(this.res);
  }
}
