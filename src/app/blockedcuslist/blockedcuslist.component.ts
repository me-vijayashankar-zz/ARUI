import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-blockedcuslist',
  templateUrl: './blockedcuslist.component.html',
  styleUrls: ['./blockedcuslist.component.css']
})
export class BlockedcuslistComponent implements OnInit {

  displayedColumns: string[] = ['Position', 'MasterCustomer', 'CustomerCode', 'EmployeeBlocked', 'BlockedON'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    debugger;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


export interface PeriodicElement {
  Position: number
  MasterCustomer: string;
  CustomerCode: string;
  EmployeeBlocked: string;
  BlockedON: string;
}

const ELEMENT_DATA: PeriodicElement[] = [

  { Position: 1, MasterCustomer: 'ADBMST', CustomerCode: 'ADB', EmployeeBlocked: 'Solomondeepak_ai', BlockedON: '1-Mar-2020' },
  { Position: 2, MasterCustomer: 'AIRTELMC', CustomerCode: 'AIRTEL', EmployeeBlocked: 'Priyanka_coomar', BlockedON: '29-Apr-2020' },
  { Position: 3, MasterCustomer: 'APPLE1', CustomerCode: 'APPLE1', EmployeeBlocked: 'Priyanka_coomar', BlockedON: '29-Apr-2020' },
  { Position: 4, MasterCustomer: 'HSBC0MST', CustomerCode: 'HSBC', EmployeeBlocked: 'Solomondeepak_ai', BlockedON: '29-Apr-2020' },
  { Position: 5, MasterCustomer: 'AIRTELMC', CustomerCode: 'AIRTEL', EmployeeBlocked: 'Priyanka_coomar', BlockedON: '4-Mar-2020' },
  { Position: 6, MasterCustomer: 'AIRTELMC', CustomerCode: 'AIRTEL', EmployeeBlocked: 'Solomondeepak_ai', BlockedON: '29-Apr-2020' },
  { Position: 7, MasterCustomer: 'AIRTELMC', CustomerCode: 'AIRTEL', EmployeeBlocked: 'Priyanka_coomar', BlockedON: '4-Mar-2020' },
  { Position: 8, MasterCustomer: 'AIRTELMC', CustomerCode: 'AIRTEL', EmployeeBlocked: 'Solomondeepak_ai', BlockedON: '29-Apr-2020' },
  { Position: 9, MasterCustomer: 'AIRTELMC', CustomerCode: 'AIRTEL', EmployeeBlocked: 'Priyanka_coomar', BlockedON: '4-Mar-2020' },
  { Position: 10, MasterCustomer: 'AIRTELMC', CustomerCode: 'AIRTEL', EmployeeBlocked: 'Solomondeepak_ai', BlockedON: '29-Apr-2020' },
  { Position: 11, MasterCustomer: 'AIRTELMC', CustomerCode: 'AIRTEL', EmployeeBlocked: 'Priyanka_coomar', BlockedON: '4-Mar-2020' },
  { Position: 12, MasterCustomer: 'AIRTELMC', CustomerCode: 'AIRTEL', EmployeeBlocked: 'Solomondeepak_ai', BlockedON: '29-Apr-2020' },
  { Position: 13, MasterCustomer: 'AIRTELMC', CustomerCode: 'AIRTEL', EmployeeBlocked: 'Solomondeepak_ai', BlockedON: '4-Mar-2020' }


];
