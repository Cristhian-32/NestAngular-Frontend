import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {

  constructor(
    public studentService: StudentService, 
    private router:Router,
    private toastrService: ToastrService,
    private activateRoute: ActivatedRoute
  ) { }

  studentList: any=[];

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params?.["id"];
    this.studentService.detail(id).subscribe(data => {
      this.studentList = data;
      this.router.navigate(['/detail-student'])
    },
    err => {
      this.toastrService.error(err.error.message, 'Fail', {
        timeOut: 3000, positionClass: 'toast-top-right',
      });
      this.router.navigate(['/']);
    }
    )
    
  }

}
