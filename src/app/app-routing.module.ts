import { NgModule } from '@angular/core';
import {PatientViewComponent} from './patient-view/patient-view.component';
import {RouterModule, Routes} from '@angular/router';
import {PatientListComponent} from './patient-list/patient-list.component';

const routes: Routes = [
  {path: 'Patient', component: PatientViewComponent},
  {path: 'List', component: PatientListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
