import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CoreModule } from '../core/core.module';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [EmployeeListComponent],
  imports: [CommonModule, EmployeeRoutingModule, CoreModule.forRoot()],
  providers: [EmployeeService],
})
export class EmployeeModule {}
