import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-ar-approver',
  templateUrl: './ar-approver.component.html',
  styleUrls: ['./ar-approver.component.css']
})
export class ArApproverComponent implements OnInit {

  constructor(private _usr:EmployeeService) { }

  public users=[];
  ngOnInit(): void {
    this._usr.getUsers()
      .subscribe(data=>this.users=data)
  }



}
