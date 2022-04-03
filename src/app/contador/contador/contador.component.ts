import { Component } from '@angular/core';

@Component({
    selector:'app-contador',
    template:`
        {{title}}

        <h1>La base es <strong>{{base}}</strong></h1>

        <button (click)='acumular(- base)'>- {{base}}</button>
        <span>{{numero}}</span>
        <button (click)='acumular(base)'>+ {{base}}</button>
    `
})
export class ContadorComponent{

    title = 'test';
    numero: number = 10;
  
    base:number = 5;
  
    acumular(valor:number){
      this.numero += valor;
    }
  

}