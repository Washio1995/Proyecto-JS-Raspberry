import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-ruta-menu-admin',
  templateUrl: './ruta-menu-admin.component.html',
  styleUrls: ['./ruta-menu-admin.component.scss']
})
export class RutaMenuAdminComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {

      this.items = [
          {label: 'Gestion Usuarios', icon: 'fa fa-fw fa-book' , routerLink:['/menu-admin/gestion-usuarios']},
          {label: 'Gestion Sensores', icon: 'fa fa-fw fa-bar-chart', routerLink:['/menu-admin/gestion-sensores']},
          {label: 'Gestion Casa', icon: 'fa fa-fw fa-bar-chart', routerLink:['/menu-admin/gestion-casa']}
      ];
  }

}
