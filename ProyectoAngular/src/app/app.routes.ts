

import {HomeComponent} from "./home/home.component";
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from '@angular/core'
import {TiendaComponent} from "./tienda/tienda.component";
import {ProductoComponent} from "./producto/producto.component";

export const routes: Routes =[
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tienda', component:TiendaComponent},//tienda/:idTienda/Productos
  {path: 'tienda/:idTienda/producto', component:ProductoComponent}
];

export const routing:ModuleWithProviders=RouterModule.forRoot(routes);
