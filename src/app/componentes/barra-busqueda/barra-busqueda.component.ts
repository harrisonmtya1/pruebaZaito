import { Component, OnInit } from '@angular/core';
import { ServicioClientesService } from 'src/app/clientes/services/servicio-clientes.service';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent implements OnInit {

  constructor(private cs:ServicioClientesService) { }

  ngOnInit(): void {
  }

  buscar(e:any){
   this.cs.buscarProductos(e.target.value)
        
  }

}
