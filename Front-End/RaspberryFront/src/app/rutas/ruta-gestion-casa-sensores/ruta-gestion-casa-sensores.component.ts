import { Component, OnInit } from '@angular/core';
import {SensorRestService} from "../../servicios/rest/sensor-rest.service";
import {Sensor} from "../../interfaces/sensor";

@Component({
  selector: 'app-ruta-gestion-casa-sensores',
  templateUrl: './ruta-gestion-casa-sensores.component.html',
  styleUrls: ['./ruta-gestion-casa-sensores.component.scss']
})
export class RutaGestionCasaSensoresComponent implements OnInit {


    sensores =[];


    columnas = [
        {field: 'id', header: 'ID'},
        {field: 'estado', header: 'Estado'},
        {field: 'idVentana', header: 'Ventana'}
    ];

  constructor(private readonly _sensorRestService: SensorRestService ) { }

  ngOnInit() {

      const sensores$ = this._sensorRestService.ListarSensores()

      sensores$.subscribe(
          (sensores: Sensor[])=>{
              console.log(sensores)
              this.sensores = sensores;
          }, (error)=>{
              console.error('Error', error);
          }
      )

  }

}
