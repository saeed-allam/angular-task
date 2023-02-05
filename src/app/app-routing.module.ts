import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './core/theme/full-layout/full-layout.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'employee',
      pathMatch: 'full',
  },
  {
      path: '',
      component: FullLayoutComponent,
      data: {
          title: 'home',
      },
      children: [
          {
              path: 'employee',
              loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
          }
      ],
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
