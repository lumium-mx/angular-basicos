import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RecetaComponent } from './recetas/receta/receta.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadoresModule } from './contador/contadores.module';

@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
