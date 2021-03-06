import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  items: MenuItem[];

    constructor () {

  }

  ngOnInit(){

      this.items = [

          {
            label: 'Iniciar Sesion', routerLink: ['login']
          },
          {
            label: 'Recuperar Contraseña', routerLink: ['recuperar-contrasena']
          },
          {
            label: 'Acerca de', routerLink: ['/info']
          }

      ]
      }

  }


