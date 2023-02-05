import { NgModule, ModuleWithProviders, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ToastrModule } from 'ngx-toastr';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgSelectModule } from '@ng-select/ng-select';
import { FilterPipe } from './pipes/filter.pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FullLayoutComponent } from './theme/full-layout/full-layout.component';
import { FilterByIdPipe } from './pipes/filter-by-id.pipe';
import { ScrolltopComponent } from './theme/scrolltop/scrolltop.component';

@NgModule({
  declarations: [
    FullLayoutComponent,
    FilterPipe,
    FilterByIdPipe,
    ScrolltopComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    NgSelectModule,
    ToastrModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  ],
  exports: [
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    TooltipModule,
    ModalModule,
    NgSelectModule,
    FullLayoutComponent,
    FilterPipe,
    FilterByIdPipe
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
    };
  }
}
