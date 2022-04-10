import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

    // Propiedades
    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder:15000
        },
        {
          nombre: 'Vegeta',
          poder:8000
        }
    ];

    // geters y seters
    get personajes():Personaje[]{
        return [...this._personajes];
    }

    // constructor
    constructor(){
        console.log('Servicio inicializado');
    }

    // metodos
    agregarPersonaje( personaje:Personaje ){
        this._personajes.push(personaje);
    }
}