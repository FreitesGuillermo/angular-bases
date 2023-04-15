import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
        <h1> {{title}} </h1>
        <h3>La base es: <strong>{{base}}</strong></h3>

        <button (click)=" acumular(base)" > +{{base}} </button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base)" > -{{base}} </button>

          `,
  // styleUrls: ['../app.component.css']
})
export class ContadorComponent {
  title = 'contador App';
  numero = 10;
  base : number = 5

sumar () {
  this.numero += 1;
}
restar () {
  this.numero -= 1;
}
acumular (valor:number){
  this.numero += valor
}

}
