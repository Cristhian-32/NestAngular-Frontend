import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Convocatoria } from 'src/app/models/convocatoria';
import { ConvocatoriaService } from 'src/app/services/convocatoria.service';

@Component({
  selector: 'app-list-convocatoria',
  templateUrl: './list-convocatoria.component.html',
  styleUrls: ['./list-convocatoria.component.css']
})
export class ListConvocatoriaComponent implements OnInit {
  convocatoriaList:any=[];

  constructor(public convocatoriaService:ConvocatoriaService,private router:Router) { }

  ngOnInit(): void {
    this.loadConvocatoria();
  }

  loadConvocatoria(){
    return this.convocatoriaService.GetConvocatoria().subscribe((data:{})=>{
      this.convocatoriaList=data;
      console.log(data);
    });
  }

  deleteConvocatoria(id:number){
    this.convocatoriaService.DeleteConvocatoria(id).subscribe((response)=>{
      this.loadConvocatoria();
    });
  }

  onEdit(convocatoria:Convocatoria){
    console.log(convocatoria);
    this.convocatoriaService.selectConvocatorias=Object.assign({},convocatoria);
    this.router.navigate(["/add-convocatoria"]);
  }

}
