import {Component, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";
import {MasterURLService} from "./Services/master-url.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
        this.tiendas = res.json();
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
}
