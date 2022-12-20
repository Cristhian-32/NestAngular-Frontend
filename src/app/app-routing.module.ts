import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './components/article/add-article/add-article.component';
import { ListArticleComponent } from './components/article/list-article/list-article.component';
import { ShowArticleComponent } from './components/article/show-article/show-article.component';
import { LoginComponent } from './components/auth/login.component';
import { RegisterAdviserComponent } from './components/auth/register-adviser.component';
import { RegisterComponent } from './components/auth/register.component';
import { HomeComponent } from './components/home/home.component';
import { ListpComponent } from './components/project/listp/listp.component';
import { MenupComponent } from './components/project/menup/menup.component';

import { AddStudentComponent } from './components/student/add-student/add-student.component';
import { DetailStudentComponent } from './components/student/detail-student/detail-student.component';
import { EditStudentComponent } from './components/student/edit-student/edit-student.component';
import { ListStudentComponent } from './components/student/list-student/list-student.component';
import { LoginGuard } from './guards/login.guard';
import { RolesGuard } from './guards/roles.guard';




const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'list-student', component:ListStudentComponent, canActivate: [RolesGuard], data: {expectedRole: ['admin', 'adviser', 'user']}},
  {path:'add-student', component:AddStudentComponent, canActivate: [RolesGuard], data: {expectedRole: ['admin', 'adviser']}},
  {path:'edit-student', component:EditStudentComponent},
  {path:'detail-student/:id', component:DetailStudentComponent},
  {path:'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path:'register', component: RegisterComponent, canActivate: [LoginGuard]},
  {path:'register-adviser', component: RegisterAdviserComponent, canActivate: [RolesGuard], data: {expectedRole: ['admin']}},
  {path:'add-article', component: AddArticleComponent},
  {path:'list-article', component:ListArticleComponent},
  {path:'show-article/:id', component: ShowArticleComponent},
  {path:'project', component: MenupComponent},
  {path:'listp', component: ListpComponent},




  //{path:'',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
