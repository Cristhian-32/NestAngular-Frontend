import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login.component';
import { RegisterComponent } from './components/auth/register.component';
import { HomeComponent } from './components/home/home.component';
import { AddStudentComponent } from './components/student/add-student/add-student.component';
import { DetailStudentComponent } from './components/student/detail-student/detail-student.component';
import { ListStudentComponent } from './components/student/list-student/list-student.component';
import { LoginGuard } from './guards/login.guard';
import { StudentGuard } from './guards/student.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'list-student', component:ListStudentComponent, canActivate: [StudentGuard], data: {expectedRole: ['admin', 'user']}},
  {path:'add-student', component:AddStudentComponent, canActivate: [StudentGuard], data: {expectedRole: ['admin']}},
  {path:'detail-student', component:DetailStudentComponent},
  {path:'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path:'register', component: RegisterComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
