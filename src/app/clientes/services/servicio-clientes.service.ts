import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface producto{
  imagen:string
  nombre:string
  precio:number
  descuento:number
}

@Injectable({
  providedIn: 'root'
})
export class ServicioClientesService {

  productos:producto[]=[]

   

  constructor(private http:HttpClient) { }

  buscarProductos(valor:string){
     this.http.get<producto[]>(`http://localhost:3000/productos?q=${valor}`).subscribe(data=>{
       this.productos=data
       
  
    })
  }


 

}
