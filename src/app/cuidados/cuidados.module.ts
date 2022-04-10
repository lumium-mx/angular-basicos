import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumenComponent } from './resumen/resumen.component';
import { PrincipalComponent } from './principal/principal.component';



@NgModule({
  declarations: [
    ResumenComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CuidadosModule { }
