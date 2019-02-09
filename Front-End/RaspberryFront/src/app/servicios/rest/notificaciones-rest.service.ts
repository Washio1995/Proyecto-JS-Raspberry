import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Notificacion} from "../../interfaces/notificaciones";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})
export class NotificacionesRestService {

    nombreModelo = '/Sensor';

    constructor(private readonly _httpClient: HttpClient) {

    }

    ListarNotificaciones():Observable<Notificacion[]> {
        //Observable
        const log$ =
            this._httpClient
                .get(environment.url2+this.nombreModelo)
                .pipe(map(r => <Notificacion[]> r))
        return log$;
    }

}