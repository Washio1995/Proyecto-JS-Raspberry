import { Component, OnInit } from '@angular/core';
import {Notificacion} from "../../interfaces/notificaciones";
import {NotificacionesRestService} from "../../servicios/rest/notificaciones-rest.service";
import {MessageService} from "primeng/api";
import {Message} from "primeng/api";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ruta-menu-usuario',
  templateUrl: './ruta-menu-usuario.component.html',
  styleUrls: ['./ruta-menu-usuario.component.scss'],
        //templateUrl: './messagesdemo.html',
        styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }

        :host ::ng-deep .ui-message,
        :host ::ng-deep .ui-inputtext {
            margin-right: .25em;
        }
    `],
        providers: [MessageService]
})

export class RutaMenuUsuarioComponent implements OnInit {


    notificaciones =[];
    msgs: Message[] = [];
    open = '/Open';
    close = '/Close';


    columnas = [
        {field: 'id', header: 'ID del Sensor'},
        {field: 'estado', header: 'Estado del Sensor'},
        {field: 'createdAt',header: 'Fecha'}
    ];


    constructor(private readonly _notificacionesRestService: NotificacionesRestService,
                private messageService: MessageService,
                private _httpClient: HttpClient) { }

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

    showSuccess1() {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Exito:', detail:'Ventana Abierta'});
        this._httpClient.post(environment.url3,this.open);

    }

    showSuccess2() {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Exito:', detail:'Ventana Cerrada'});
        this._httpClient.post(environment.url3,this.close);
        console.log(environment.url3+this.close);

    }




}
