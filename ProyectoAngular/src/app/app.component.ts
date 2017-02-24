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
   constructor(private _http: Http, private _masterURL: MasterURLService) {
    console.log("Inicio el constructor");
  }

  ngOnInit() {

  }



}
