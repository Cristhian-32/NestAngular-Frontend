import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Convocatoria } from 'src/app/models/convocatoria';
import { ConvocatoriaService } from 'src/app/services/convocatoria.service';

@Component({
  selector: 'app-add-convocatoria',
  templateUrl: './add-convocatoria.component.html',
  styleUrls: ['./add-convocatoria.component.css']
})
export class AddConvocatoriaComponent implements OnInit {

  constructor(
    public convocatoriaService: ConvocatoriaService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }
  onCreate(convocatoriaForm: NgForm) {
    if (convocatoriaForm.value.id == null) {
      this.convocatoriaService.CreateConvocatoria(convocatoriaForm.value).subscribe((response) => {
        this.toastr.success('Nuevo  Agregado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-right'
        });
        this.resetForm(convocatoriaForm);
        this.router.navigate(["/list-convocatoria"]);
      },
        err => {
          this.toastr.error(err.error.message, 'Fail', {
            timeOut: 2000, positionClass: 'toast-top-right'
          });
        });
    }
  }

  resetForm(convocatoriaForm: NgForm) {
    if (convocatoriaForm != null) {
      convocatoriaForm.reset();
      this.convocatoriaService.selectConvocatorias = new Convocatoria();
    }
  }

  backReset(convocatoriaForm: NgForm) {
    this.resetForm(convocatoriaForm);
    this.router.navigate(['/']);
  }

}
