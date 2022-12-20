import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Researh } from 'src/app/models/researh';
import { ResearchService } from 'src/app/services/research.service';

@Component({
  selector: 'app-add-research',
  templateUrl: './add-research.component.html',
  styleUrls: ['./add-research.component.css']
})
export class AddResearchComponent implements OnInit {

  constructor(
    public researchService: ResearchService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  date: Date = new Date;

  ngOnInit(): void {
  }

  onCreate(researchForm: NgForm) {
    if (researchForm.value.id == null) {
      this.researchService.create(researchForm.value).subscribe((response) => {
        this.toastr.success('Registro Completado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-right'
        });
        this.resetForm(researchForm);
        this.router.navigate(["/list-research"]);
      },
        err => {
          this.toastr.error(err.error.message, 'Fail', {
            timeOut: 2000, positionClass: 'toast-top-right'
          });
        });
    }
  }

  resetForm(researchForm: NgForm) {
    if (researchForm != null) {
      researchForm.reset();
      this.researchService.selectResearch = new Researh();
    }
  }

  backReset(researchForm: NgForm) {
    this.resetForm(researchForm);
    this.router.navigate(['/']);
  }
}
