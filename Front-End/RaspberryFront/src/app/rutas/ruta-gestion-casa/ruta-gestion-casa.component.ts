import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";


@Component({
  selector: 'app-ruta-gestion-casa',
  templateUrl: './ruta-gestion-casa.component.html',
  styleUrls: ['./ruta-gestion-casa.component.scss']
})
export class RutaGestionCasaComponent implements OnInit {

    private items: MenuItem[];

  constructor() { }

  ngOnInit() {

      this.items = [
          {label:'PISOS', routerLink:'/login/menu-admin/gestion-casa/pisos'},
          {label:'CUARTOS', routerLink:'/login/menu-admin/gestion-casa/cuartos'},
          {label:'VENTANAS', routerLink: '/login/menu-admin/gestion-casa/ventanas'},
          {label:'SENSORES', routerLink:'/login/menu-admin/gestion-casa/sensores'}

      ];

  }


}
