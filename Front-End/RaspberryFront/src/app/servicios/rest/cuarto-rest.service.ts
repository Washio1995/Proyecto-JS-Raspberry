import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cuarto} from "../../interfaces/cuarto";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class CuartoRestService {

    nombreModelo = '/Cuarto';

    constructor(private readonly _httpClient: HttpClient) {

    }

    ListarCuarto():Observable<Cuarto[]> {
        //Observable
        const cuartos$ =
            this._httpClient
                .get(environment.url+this.nombreModelo)
                .pipe(map(r => <Cuarto[]> r))
        return cuartos$;
    }


    delete(id: number): Observable<Cuarto> {
        return this._httpClient
            .delete(environment.url + this.nombreModelo + `/${id}`)
            .pipe(map(r => <Cuarto> r)); // Castear
    }

    create(nivel:number,
           idCasa: number): Observable<Cuarto> {

        const objetoAGuardar = {
            nivel: nivel,
            idCasa: idCasa
        };

        const url = environment.url + this.nombreModelo;

        return this._httpClient
            .post(url, objetoAGuardar)
            .pipe(map(r => <Cuarto> r)); // Castear
    }

}