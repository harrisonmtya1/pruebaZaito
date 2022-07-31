import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import {InputTextModule} from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { BarraBusquedaComponent } from './componentes/barra-busqueda/barra-busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BarraBusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
