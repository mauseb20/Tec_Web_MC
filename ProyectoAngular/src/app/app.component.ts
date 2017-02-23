import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hola Amigos';
  nombre: string = "";
  apellido: string = "";
  colorH3="red";
  tamanoH3="50px";

  nuevaTienda:any={};

  constructor() {
    this.nombre = "Mauricio";
    this.apellido = "Cabrera";
    console.log("Inicio el constructor");
  }

  ngOnInit() {
    this.apellido = "Laguapillo";
    this.nombre = "Sebastian";
    console.log("On Init")
  }

  nombreCompleto(): string {
    return `${this.nombre} ${this.apellido}`
  }

  hizoClick() {
    console.log("Hizo Click");
  }

  hizoFocus() {
    console.log("Hizo Focus")
  }

  crearTienda(formulario){
    console.log(formulario);
  }
}
