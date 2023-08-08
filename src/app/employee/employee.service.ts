import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  listPage = '/employee';
  id = 'employeeId';
  requestSent = false;
  list: any;

  departmentList = [
    { departmentId: 1, departmentName: 'Finance' },
    { departmentId: 2, departmentName: 'IT' },
  ];
  constructor(public http: HttpClient) {
  }

  getAll() {
    if (!this.requestSent) {
      this.requestSent = true;
      this.list = undefined;
      this.http.get('Employee/GetAll').subscribe({
        next: (response: any) => {
          this.list = response;
          this.requestSent = false;
        },
        error: err => {
          this.list = [
            { employeeId: 1, name: 'John wicks', employmentDate: '12/1/2020', salary: '2000', experience: null, department: 1 },
            { employeeId: 2, name: 'George', employmentDate: '5/10/2018', salary: '5000', experience: null, department: 2 },
            { employeeId: 3, name: 'Alfied', employmentDate: '15/2/2021', salary: '2000', experience: null, department: 2 },
            { employeeId: 4, name: 'Charilote', employmentDate: '1/1/2022', salary: '4000', experience: null, department: 1 },
          ];
          this.requestSent = false;
        },
      });
    }
  }
  delete(id) {
    this.http.delete('Employee/Delete/' + id).subscribe({
      next: () => {
        this.getAll();
      },
      error: () => {
       let item= this.list.map(i=>i.employeeId).indexOf(id);
        this.list.splice(item, 1);
      },
    });
  }
  Random(): Number {
    let randonId = Math.floor((1 + Math.random()) * 0x10000);
    return Number(randonId) ;    
  }
  operation(model: any) {
    if (model[this.id] == null) {
      this.http.post(`Employee/Insert`, model).subscribe({
        error: () => {
          model.employeeId = this.Random();
          this.list.push(model);
        },
      });
    } else {
      this.http.put(`Employee/Edit`, model).subscribe({
        error: () => {
          this.list.find(x => {
            x.departmentId == model.departmentId && ((x.desc = model), true);
          });
        },
      });
    }
  }
  search(model) {
    return this.http.post('Employee/Search', model);
  }
  datePickerConfig = {
    dateInputFormat: 'DD/MM/YYYY',
    containerClass: 'theme-dark-blue',
    showWeekNumbers: false,
  };
}
