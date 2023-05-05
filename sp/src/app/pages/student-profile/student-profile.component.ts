// import { Component } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { StudentDataService } from '../../tools/services/student-data.service';
@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent {

  constructor(private service: StudentDataService) { }
  student = "rishabh"

  flag = 0
  flag2 = 0
  errorMsg = ""
  StudentImgLocal = "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png";

  data1 = {
    StudentImg: "",
    StudentName: "",
    FatherNme: "",
    Admission: "",
    Faculty: "",
    Course: "",
    StudentStatus: ""
  }

  data = {
    StudentImg: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
    StudentName: "",
    FatherNme: "",
    Admission: "",
    Faculty: "",
    Course: "",
    StudentStatus: ""
  }


  Contact = {
    StudentName: "",
    email: "",
    Address: "",
    Town: "",
    Street: "",
    StudentStatus: ""
  }
  QualificationDetails = {
    Qualification: "",
    InterPercentage: "",
    MatricPercentage: ""

  }

  Document = {
    Document1: "",
    Document2: ""
  }
  AcademicInfo = {
    School: "",
    DocumentOfSchool: ""
  }



  f = 0
  fetchedData1: any
  fetchedData: any
  data2: any; flag0 = true; widthA = '0px'; widthB = '250px';
  myFunc(input: any) {
    this.errorMsg = ""
    this.data2 = { da: input.value }
    this.service.profile1().subscribe((result: any) => {
      console.log(result.StudentName);
      this.fetchedData1 = result;
      this.fetchedData = this.fetchedData1
      this.setData();
    });
    // console.log(this.fetchedData1.StudentName);
    // .subscribe(response => {
    // console.log(response)
    // this.fetchedData = this.fetchedData1
    // this.setData();
    // this.data = this.fetchedData

    if (this.fetchedData1 == null) { this.errorMsg = "**You are not a member of our institute" }
    else { this.setData(); }
    // console.log(this.fetchedData)




    // console.log(input.value)
    if (input.value === "rishabh") {
      this.setData();
    }

    else if (input.value.trim().length === 0) {
      this.errorMsg = "**Value is required";
    }
    else {
      // alert("you are not a member of our institute")
    }
    input.value = ""
  }
  btnStyle2 = 'btn-default1';
  btnStyle = 'btn-default';
  a = 1;
  // get value  from service


  closeNav() {
    if (this.btnStyle == 'btn-change') {
      this.btnStyle = 'btn-default';
    } else {
      this.a = 2; this.flag0 = false;
      this.btnStyle = 'btn-change';
    }
  }
  openNav() {
    this.a = 1; this.flag0 = true;
    this.btnStyle = "btn-default";
  }
  @Input()
  // childData: number;

  setData() {
    this.PersonalDetails()
    this.data1 = this.fetchedData1
    console.log(this.fetchedData1.StudentImg)
    this.flag2 = 1
    //  this.StudentImgLocal="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ram_Nath_Kovind_official_portrait.jpg/330px-Ram_Nath_Kovind_official_portrait.jpg",

    //   this.data1.StudentImg="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ram_Nath_Kovind_official_portrait.jpg/330px-Ram_Nath_Kovind_official_portrait.jpg",
    //   this.data1.FatherNme="Rahish tiwari"
    //   this.data1.StudentName="rishabh"
    // this.data1.Admission="2020"
    // this.data1.Faculty="btech cse"
    // this.data1.Course="engineering"
    // this.data1.StudentStatus="active"
  }
  DocumentF() {
    this.flag = 1,
      this.Document.Document1 = "Docutdddddd",
      this.Document.Document2 = "Docuddddddd"
  }
  Reset1() {
    this.errorMsg = ""
    this.data.StudentImg = "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png";
    this.data1.StudentImg = "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png";
    this.flag = 23; this.flag2 = 11
    this.data1.StudentName = ""
    this.data1.Admission = ""
    this.data1.FatherNme = ""
    this.data1.Faculty = ""
    this.data1.Course = ""
    this.data1.StudentStatus = ""

  }
  // getWidth() {
  //   this._document.querySelector('#mySidebar');

  // }
  PersonalDetails() {
    this.flag = 13
    if (this.btnStyle2 == 'btn-change1') {
      this.btnStyle2 = 'btn-default1';
    } else { this.btnStyle2 = 'btn-change1'; }
    this.data = this.fetchedData1;
    //   this.data.FatherNme="Rahish tiwari"
    //   this.data.StudentName="rishabh"
    // this.data.Admission="2020"
    // this.data.Faculty="btech cse"
    // this.data.Course="engineering"
    // this.data.StudentStatus="active"
  }
  Contact1() {
    if (this.btnStyle2 == 'btn-change1') {
      this.btnStyle2 = 'btn-default1';
    } else { this.btnStyle2 = 'btn-change1'; }
    this.flag = 12
    this.Contact = this.fetchedData;
    // this.Contact.StudentName="4connnnnnnnnhabh",
    // this.Contact.email="43connnnnnntiwari",
    // this.Contact.Address="connnnnnnnnnn50",
    // this.Contact.Town="4343443565ch cse",
    // this.Contact.Street="4343443565ineering",
    // this.Contact.StudentStatus="4343443565ive"
  }
  QualificationDetailsF() {
    this.flag = 14; if (this.btnStyle2 == 'btn-change1') {
      this.btnStyle2 = 'btn-default1';
    } else { this.btnStyle2 = 'btn-change1'; }
    this.QualificationDetails = this.fetchedData;
    // this.QualificationDetails.Qualification="100% in All",
    // this.QualificationDetails.InterPercentage="100% in All",
    // this.QualificationDetails.MatricPercentage="100% in All"
  }
  AcademicInfoF() {
    this.flag = 15; if (this.btnStyle2 == 'btn-change1') {
      this.btnStyle2 = 'btn-default1';
    } else { this.btnStyle2 = 'btn-change1'; }
    this.AcademicInfo = this.fetchedData;
    // this.AcademicInfo.School="Academic infoh",
    // this.AcademicInfo.DocumentOfSchool="Academic info tiwari"
  }

  myFunc1() { }
  width1 = 0;
  ngOnInit(): void {
    this.myFunc("aks");
    this.width1 = this.service.getData();
    if (this.width1 === 1) {
      this.widthA = "200px";
    }
    console.log(this.width1)
  }

  Widthf() {
    this.width1 = this.service.getData();
    if (this.width1 === 1) {
      this.widthB = "200px";
    }
  }

}



