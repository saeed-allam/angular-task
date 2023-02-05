import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent {
  search = new FormControl(null);
  searchForm: FormGroup;
  requestSent = false;
  @ViewChild('operationModal', { static: false }) operationModal: ModalDirective;
  showMenu: boolean = true;
  modalRef: BsModalRef;
  employeeForm: FormGroup;

  constructor(
    public employeeSer: EmployeeService,
    public router: Router,
    public formBuilder: FormBuilder,
    private modalService: BsModalService,
    public activatedRoute: ActivatedRoute
  ) {
    this.initialModel();
    this.employeeSer.getAll();
  }

  initialModel() {
    this.searchForm = this.formBuilder.group({
      name: [null, []],
      employmentDate: [null, []],
      salary: [null, []],
      department: [null, []],
      experience: [null, []],
    });
  }
  get fs() {
    return this.searchForm.controls;
  }
  get f() {
    return this.employeeForm.controls;
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  operation(template: any, item?) {
    this.employeeForm = this.formBuilder.group({
      employeeId: [null, []],
      name: [null, [Validators.required]],
      employmentDate: [null, []],
      salary: [null, []],
      experience: [null, []],
      department: [null, []],
    });
    if (item != null) this.employeeForm.setValue(item);
    if (this.modalRef) this.modalRef.hide();
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }


  onSubmit() {
    if (!this.requestSent) {
      this.requestSent = true;
      const model = this.searchForm.value;
      this.employeeSer.search(model);
    }
  }

  onSubmitOperation() {
    const model = this.employeeForm.value;
    model.employmentDate = model.employmentDate.toLocaleDateString('en-US');
    this.employeeSer.operation(model);
    this.modalRef.hide();
  }

  reset() {
    this.initialModel();
    this.onSubmit();
  }
}
