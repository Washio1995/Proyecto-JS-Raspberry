import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-ruta-menu-admin',
  templateUrl: './ruta-menu-admin.component.html',
  styleUrls: ['./ruta-menu-admin.component.scss']
})
export class RutaMenuAdminComponent implements OnInit {

  items: MenuItem[];
  itemsBoton: MenuItem[];

  constructor() { }

  ngOnInit() {




      this.items = [
          {label: 'Gestion Usuarios', icon: 'fa fa-fw fa-book' , routerLink:['/login/menu-admin/gestion-usuarios']},
          {label: 'Gestion Sensores', icon: 'fa fa-fw fa-bar-chart', routerLink:['/login/menu-admin/gestion-sensores']},
          {label: 'Gestion Casa', icon: 'fa fa-fw fa-bar-chart', routerLink:['/login/menu-admin/gestion-casa']},
          {label: 'Notificaciones', routerLink: ['/login/menu-usuario/notificaciones'] }
      ];

      this.itemsBoton = [
          {label: 'Abrir', icon: 'pi pi-refresh', command: () => {
                  this.abrir();
              }},
          {label: 'Cerrar', icon: 'pi pi-times', command: () => {
                  this.cerrar();
              }}
      ];

  }


    abrir() {
      console.log('ssh pi@172.31.103.82')
        console.log('admin')
       console.log('node open.js')

    }




    cerrar() {
       console.log('node close.js')
    }


}
