import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['../../app.component.css']
})
export class ListadoComponent  {

 public heroes : string [] = ['Ant-man','Hulk','Thor','Chimichagas','Spiderman','Capitan America'];
 public heroeBorrado?:string ='';

 borrarHeroe = () => {


    this.heroeBorrado = this.heroes.pop() || "";
 }

}
