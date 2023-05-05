import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/pages/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // constructor() { }
  baseUrl = 'https://vast-cyan-antelope-tie.cyclic.app/postEmplyees';

  constructor(private http: HttpClient) { }

  getEmployees() {
    let headers = new HttpHeaders()
      .set("authorization", `bearer ${localStorage.getItem('token')}`)
    return this.http.get<Employee[]>(this.baseUrl, { headers });
  }

  postEmployee(employee: Employee) {
    let headers = new HttpHeaders()
      .set("authorization", `bearer ${localStorage.getItem('token')}`)
    return this.http.post<Employee>(this.baseUrl, employee, { headers });
  }

  deleteEmployee(id: string) {
    let headers = new HttpHeaders()
      .set("authorization", `bearer ${localStorage.getItem('token')}`)
    return this.http.delete(this.baseUrl + '/' + id, { headers });
  }
}
