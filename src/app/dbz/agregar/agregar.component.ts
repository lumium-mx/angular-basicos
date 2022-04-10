import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor( private dbzService: DbzService) { }

  ngOnInit(): void {
  }

  @Input() nuevo:Personaje = {
    nombre: '',
    poder: 0
  }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    //agregar(event:any){ // prueba de evento manejado a la antigua
    //event.preventDefault(); // prueba de evento manejado a la antigua
    if(this.nuevo.nombre.trim().length===0){return;}

    console.log(this.nuevo);
    //this.onNuevoPersonaje.emit(this.nuevo);
    // llamar servicio
    this.dbzService.agregarPersonaje(this.nuevo)

    
    // this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre:'',
      poder: 0
    }
  }


}
