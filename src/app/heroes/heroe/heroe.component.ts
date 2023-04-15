import { Component } from "@angular/core";


@Component({
    selector:'Heroe-componet',
    templateUrl: 'heroe.component.html',
    styleUrls: ['../../app.component.css']

})
export class HeroeComponent {

nombre : string ='ironman';
edad : number = 45;
get nombreCapitalizado ():string {
    return this.nombre.toUpperCase()
}
obtenerNombre ():string {
 return `${this.nombre} - ${this.edad}`
}

CambiarNombre () : void {
    this.nombre = 'Spiderman';
}
CambiarEdad (): void {
    this.edad = 28;
  }
  Resetform():void {
    this.nombre ='ironman';
    this.edad = 45;
  }

}
