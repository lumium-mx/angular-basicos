import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cambiarValor(event:any){
    console.log(event.target.value);
  }

  nuevo:Personaje ={
    nombre: 'nombre',
    poder: 1000
  }

}
