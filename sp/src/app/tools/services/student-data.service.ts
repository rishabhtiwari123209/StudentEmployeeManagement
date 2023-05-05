import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  d: any
  VAL: any
  private baseURL = 'https://vast-cyan-antelope-tie.cyclic.app'
  constructor(private http: HttpClient, public dialog: MatDialog, private router: Router, private httpClient: HttpClientModule) { }

  value: any;
  passData1(data: number) {
    this.value = data;

  }
  getData() {
    return this.value;
  }
  postData(data: any): Observable<any> {
    console.log(typeof data)
    return this.http.post(`${this.baseURL}/getAll`, data)
  }
  login(data: any) {
    console.log(data)
    this.http.post(this.baseURL + "/register", data).subscribe((result: any) => {
      // console.log(result)
      localStorage.setItem("token", result.token)
      // this.router.navigate(['dashboard'])
    })
  }
  LoginData: any;
  Login2(data: any) {
    console.log(data)
    this.LoginData = data;
    this.http.post(this.baseURL + "/loginA", data).subscribe((result: any) => {
      console.log(result, "dfdfd");
      if (result.token != "abc") {
        localStorage.setItem("token", result.token)
        // this.LoginData = data;
        this.profile();
        // this.router.navigate(['/StudentDash']);

      }
      else {
        if (this.LoginData.staus == "student") {
          this.router.navigate(['/StudentDash']);
        }
        if (this.LoginData.staus == "employee") { this.router.navigate(['/employee']); }
      }

    });
  }
  logindataAPI: any;
  profile() {
    let headers = new HttpHeaders()
      .set("authorization", `bearer ${localStorage.getItem('token')}`)
    this.http.post(this.baseURL + "/profile", {}, { headers }).subscribe((result: any) => {
      console.log(result, "fdfd")
      this.logindataAPI = result;
      if (result.result) {
        if (this.LoginData.staus == "student") {
          this.router.navigate(['/StudentDash']);
        }
        if (this.LoginData.staus == "employee") { this.router.navigate(['/employee']); }
      }
      else { this.router.navigate(['']); }
    })

  }
  profile1(): Observable<any> {
    let headers = new HttpHeaders()
      .set("authorization", `bearer ${localStorage.getItem('token')}`)
    return this.http.post(this.baseURL + "/profile1", {}, { headers })
  }


  toast = false
  signup(data: any) {
    console.log(data)
    this.http.post(this.baseURL + "/signup1", data).subscribe((result: any) => {
      console.log(result);
      this.toast = true

    });
    return this.toast;
  }



}
