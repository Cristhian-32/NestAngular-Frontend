import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(public studentService: StudentService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  submitForm(studentForm: NgForm) {
    if (studentForm.value.id == null) {
      this.studentService.CreateStudent(studentForm.value).subscribe((response) => {
        this.toastr.success('Nuevo Estdudiante Agregado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-right'
        });
        this.router.navigate(["/list-student"]);
      });
    } else {
      this.studentService.updateStudent(studentForm.value.id, studentForm.value).subscribe((response)=>{
        this.toastr.success('Datos Actualizados', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-right'
        });
        this.router.navigate(["/list-student"]);
      });
    }
    this.resetForm(studentForm);

  }

  resetForm(studentForm: NgForm) {
    if (studentForm != null) {
      studentForm.reset();
      this.studentService.selectStudent = new Student();
    }
  }

}
