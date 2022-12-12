import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/student/add-student/add-student.component';
import { ListStudentComponent } from './components/student/list-student/list-student.component';
import { DdComponent } from './dashboard/dd/dd.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'list-student', component:ListStudentComponent},
  {path:'add-student', component:AddStudentComponent},
  {path:'dashboard',component:DdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
