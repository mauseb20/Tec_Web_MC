import { Component, OnInit } from '@angular/core';
import {Response, Http} from "@angular/http";
import {NgForm} from "@angular/forms";
import {MasterURLService} from "../Services/master-url.service";

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  title = 'Bienvenido a ingresar tiendas!';
  error: string = "No hay errores";

  nuevaTienda = {};
  tiendas = [];

  disabledButtons = {
    NuevaTiendaFormSubmitButton: false
  };

  constructor(private _http: Http, private _masterURL: MasterURLService) {
    console.log("Inicio el constructor");
  }

  ngOnInit() {
    this._http.get(this._masterURL.url + "Tienda").subscribe(
      (res: Response) => {
        this.tiendas = res.json().map((value)=>{value.formularioCerrado=true; return value});
      },
      (error) => {
        console.log(error);
      }
    )

  }

  crearTienda(formulario: NgForm) {
    console.log(formulario);
    this.disabledButtons.NuevaTiendaFormSubmitButton = true;
    this._http.post(this._masterURL.url + "Tienda", {
      nombre: formulario.value.nombre,
    }).subscribe(
      (res) => {
        console.log("No hubo errores");
        console.log(res);
        this.tiendas.push(res.json());
        this.nuevaTienda = {};
        this.disabledButtons.NuevaTiendaFormSubmitButton = false;
      },
      (error) => {
        this.disabledButtons.NuevaTiendaFormSubmitButton = false;
        console.log("Ocurrio un error", error);
      },
      () => {
        console.log("Termino la funcion vamos a la casa");
      }
    );
  }

  borrarTienda(id: number) {
    this._http.delete(this._masterURL.url + "Tienda/" +id).subscribe(
      (res)=>{
        let tiendaBorrada =res.json();
        this.tiendas=this.tiendas.filter(value=>tiendaBorrada.id!=value.id)
      }
    )
  }

  actualizarTienda(tienda:any){
    let parametros ={
      nombre:tienda.nombre
    };
    this._http.put(this._masterURL.url+"Tienda/"+tienda.id,parametros). subscribe(
      (res:Response)=>{
        tienda.formularioCerrado=!tienda.formularioCerrado;
        console.log("Respuesta",res.json());
      },
      (error)=>{
        console.log("Error",error)
      }
    )
  }

}
