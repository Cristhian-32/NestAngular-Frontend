import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './components/student/add-student/add-student.component';
import { EditStudentComponent } from './components/student/edit-student/edit-student.component';
import { ListStudentComponent } from './components/student/list-student/list-student.component';
import { DetailStudentComponent } from './components/student/detail-student/detail-student.component';

import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './services/student.service';


import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/auth/login.component';
import { RegisterComponent } from './components/auth/register.component';
import { interceptorProvider } from './interceptors/student.interceptor';

//External
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RegisterAdviserComponent } from './components/auth/register-adviser.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { AddArticleComponent } from './components/article/add-article/add-article.component'
import { ArticleService } from './services/article.service';
import { EditArticleComponent } from './components/article/edit-article/edit-article.component';
import { ListArticleComponent } from './components/article/list-article/list-article.component';
import { ShowArticleComponent } from './components/article/show-article/show-article.component';
import { ListpComponent } from './components/project/listp/listp.component';
import { MenupComponent } from './components/project/menup/menup.component';

import { AddTemplateComponent } from './components/template/add-template/add-template.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    ListStudentComponent,
    DetailStudentComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    RegisterAdviserComponent,
    AddArticleComponent,
    EditArticleComponent,
    ListArticleComponent,
    ShowArticleComponent,
    ListpComponent,
    MenupComponent,

    AddTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatDialogModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
  ],
  providers: [StudentService, ArticleService, interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
