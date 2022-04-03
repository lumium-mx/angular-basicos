import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes:string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado:string = '';

  borrarHeroe() {
    console.log("borrando...");
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }

  constructor() {
    console.log('Constructor');
   }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
