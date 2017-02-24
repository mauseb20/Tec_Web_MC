import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MasterURLService} from "./Services/master-url.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  //servicios a nivel de aplicacion
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  //Servicios compartidos
  providers: [
    MasterURLService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
