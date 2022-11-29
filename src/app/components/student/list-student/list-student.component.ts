import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  studentList: any=[];

  emptyList = undefined;

  constructor(public studentService: StudentService, private router:Router) { }

  ngOnInit(): void {

    this.loadStudents();
  }

  loadStudents() {
    return this.studentService.GetStudents().subscribe((data:{})=>{
      this.studentList=data;
      this.emptyList = undefined;
    },
    err => {
      this.emptyList = err.error.message;
    }
    )
  }

  onEdit(student: Student) {
    console.log(student);
    this.studentService.selectStudent=Object.assign({}, student);
    this.router.navigate(["/add-student"]);
    
  }

  deleteStudent(id:number) {
    Swal.fire({
      title: '¿Está Seguro',
      text: "No podrá deshacer este cambio!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No',
      confirmButtonText: 'Si, borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.studentService.DeleteStudent(id).subscribe((response)=>{
          this.loadStudents();
        });
        Swal.fire(
          'HECHO!',
          'Registro Eliminado Satisfactoriamente.',
          'success'
        )
      } else if (result.dismiss ===Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Registro a salvó',
          'error'
        )
      }
    })
  }
 
}
