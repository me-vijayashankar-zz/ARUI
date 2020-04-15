import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from 'src/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url="/assets/data/employee.json"

  constructor(private http:HttpClient) { }

  getUsers():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url);
    //return["vijay","priyanka"]
  }

}
