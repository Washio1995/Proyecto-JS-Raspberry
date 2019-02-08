import { Component, OnInit } from '@angular/core';
import {Notificacion} from "../../interfaces/notificaciones";
import {NotificacionesRestService} from "../../servicios/rest/notificaciones-rest.service";

@Component({
  selector: 'app-ruta-notificaciones',
  templateUrl: './ruta-notificaciones.component.html',
  styleUrls: ['./ruta-notificaciones.component.scss']
})
export class RutaNotificacionesComponent implements OnInit {

    notificaciones =[];


    columnas = [
        {field: 'id', header: 'ID del Sensor'},
        {field: 'estado', header: 'Estado del Sensor'},
        {field: 'createdAt',header: 'Fecha'}
    ];





  constructor(private readonly _notificacionesRestService: NotificacionesRestService) { }

  ngOnInit() {

      const log$ = this._notificacionesRestService.ListarNotificaciones()

      log$.subscribe(
          (notificaciones: Notificacion[])=>{
              console.log(notificaciones)
              this.notificaciones = notificaciones;
          }, (error)=>{
              console.error('Error', error);
          }
      )

  }


}
