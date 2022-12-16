import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login.component';
import { RegisterAdviserComponent } from './components/auth/register-adviser.component';
import { RegisterComponent } from './components/auth/register.component';
import { HomeComponent } from './components/home/home.component';
import { AddStudentComponent } from './components/student/add-student/add-student.component';
import { DetailStudentComponent } from './components/student/detail-student/detail-student.component';
import { ListStudentComponent } from './components/student/list-student/list-student.component';
import { LoginGuard } from './guards/login.guard';
import { RolesGuard } from './guards/roles.guard';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'list-student', component:ListStudentComponent, canActivate: [RolesGuard], data: {expectedRole: ['admin', 'adviser', 'user']}},
  {path:'add-student', component:AddStudentComponent, canActivate: [RolesGuard], data: {expectedRole: ['admin', 'adviser']}},
  {path:'detail-student', component:DetailStudentComponent},
  {path:'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path:'register', component: RegisterComponent, canActivate: [LoginGuard]},
  {path:'register-adviser', component: RegisterAdviserComponent, canActivate: [RolesGuard], data: {expectedRole: ['admin']}},
  //{path:'',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
