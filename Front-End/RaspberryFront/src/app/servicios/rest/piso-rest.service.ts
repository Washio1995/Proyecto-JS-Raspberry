import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Piso} from "../../interfaces/piso";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class PisoRestService {

    nombreModelo = '/Piso';
    open = '/Open';
    close = '/Close';

    constructor(private readonly _httpClient: HttpClient) {

    }

    ListarPisos():Observable<Piso[]> {
        //Observable
        const pisos$ =
            this._httpClient
                .get(environment.url+this.nombreModelo)
                .pipe(map(r => <Piso[]> r))
        return pisos$;
    }


    delete(id: number): Observable<Piso> {
        return this._httpClient
            .delete(environment.url + this.nombreModelo + `/${id}`)
            .pipe(map(r => <Piso> r)); // Castear
    }

    create(nivel:number,
           idCasa: number): Observable<Piso> {

        const objetoAGuardar = {
            nivel: nivel,
            idCasa: 1
        };

        const url = environment.url + this.nombreModelo;

        return this._httpClient
            .post(url, objetoAGuardar)
            .pipe(map(r => <Piso> r)); // Castear
    }

}