import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { AlmacenComponent } from './almacen/almacen.component';
import { ClientesRoutingModule } from './clientes-routing.moduel';
import { AccesoriosExteriorComponent } from './accesorios-exterior/accesorios-exterior.component';
import { AccesoriosInteriorComponent } from './accesorios-interior/accesorios-interior.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AlmacenComponent,
    AccesoriosExteriorComponent,
    AccesoriosInteriorComponent,
    MantenimientoComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ]
})
export class ClientesModule { }
