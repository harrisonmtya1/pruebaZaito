import { CssSelector } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ServicioClientesService } from '../services/servicio-clientes.service';


interface producto{
  imagen:string
  nombre:string
  precio:number
  descuento:number
}

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent implements OnInit {

  constructor(private cs:ServicioClientesService) { }



 

  get getProductos(){
    return this.cs.productos
  }

   
  ngOnInit(): void {
    this.cs.buscarProductos('')
     
  }

}
