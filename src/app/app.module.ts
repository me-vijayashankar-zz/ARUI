import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BlockedcuslistComponent } from './blockedcuslist/blockedcuslist.component';
import { InboxArteamComponent } from './inbox-arteam/inbox-arteam.component';
import { BlockcusdocupComponent } from './blockcusdocup/blockcusdocup.component';
import { ArApproverComponent } from './ar-approver/ar-approver.component';
import { EmployeeService } from './employee.service';


@NgModule({
  declarations: [
    AppComponent,
    BlockedcuslistComponent,
    InboxArteamComponent,
    BlockcusdocupComponent,
    ArApproverComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
