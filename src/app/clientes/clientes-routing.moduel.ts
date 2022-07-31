import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccesoriosExteriorComponent } from "./accesorios-exterior/accesorios-exterior.component";
import { AlmacenComponent } from "./almacen/almacen.component";

const routes:Routes = [{
    path:'',
    children:[
        {
            path:'almacen',
            component:AlmacenComponent
        },
        {
            path:'accesoriosExterior',
            component: AccesoriosExteriorComponent
        },
        {
            path:'**',
            redirectTo:'almacen'
        }
    ]
    
}]

@NgModule({

    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]

})



export class ClientesRoutingModule{


}