import { Component, OnInit } from '@angular/core';

interface itemMenu{
    nombre:string,
    imagen: string,
    ruta?:string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  menu: itemMenu[]=[
    {
      nombre: 'Almacen',
      imagen: '/assets/almacen.JPG' ,
      ruta:'clientes/almacen'
    },
    {
      nombre: 'Accesorios Exterior',
      imagen: '/assets/accesoriose.JPG' ,
      ruta:'clientes/accesoriosExterior'
    },
    {
      nombre: 'Mantenimiento',
      imagen: '/assets/mantenimiento.JPG' 
    },
    {
      nombre: 'Accesorios interior',
      imagen: '/assets/accesoriosi.JPG' 
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
