import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/student/add-student/add-student.component';
import { ListStudentComponent } from './components/student/list-student/list-student.component';

const routes: Routes = [
  {path:'list-student', component:ListStudentComponent},
  {path:'add-student', component:AddStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
