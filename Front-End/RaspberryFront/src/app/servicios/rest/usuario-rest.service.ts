import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../../interfaces/usuario";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsuarioRestService {

    nombreModelo = '/Usuario';

    constructor(private readonly _httpClient: HttpClient) {

    }

    findAll(): Observable<Usuario[]> {
        // OBSERVABLE
        const razas$ = this._httpClient
            .get(environment.url + this.nombreModelo)
            .pipe(map(r => <Usuario[]> r)); // Castear

        return razas$;
    }

    delete(id: number): Observable<Usuario> {
        return this._httpClient
            .delete(environment.url + this.nombreModelo + `/${id}`)
            .pipe(map(r => <Usuario> r)); // Castear
    }

    create(nombre: string,
           username: string,
           password: string): Observable<Usuario> {

        const objetoAGuardar = {
            nombre: nombre,
            username: username,
            password: password,
        };

        const url = environment.url + this.nombreModelo;

        return this._httpClient
            .post(url, objetoAGuardar)
            .pipe(map(r => <Usuario> r)); // Castear
    }

    findOneById(id: number | string): Observable<Usuario> {
        const url = environment.url + this.nombreModelo
            + '/' + id;

        return this._httpClient
            .get(url)
            .pipe(map(r => <Usuario> r)); // Castear
    }

    updateOneById(raza: Usuario) {

        const url = environment.url + this.nombreModelo
            + '/' + raza.id;

        return this._httpClient
            .put(url, raza)
            .pipe(map(r => <Usuario> r)); // Castear

    }
}
