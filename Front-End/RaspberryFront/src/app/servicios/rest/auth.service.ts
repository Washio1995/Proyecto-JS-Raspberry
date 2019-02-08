import {Injectable} from "@angular/core";
import {Usuario} from "../../interfaces/usuario";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";


@Injectable()
export class AuthService {
  usuario:Usuario;

  constructor(private readonly _httpClient: HttpClient) {

  }

  login(correoElectronico: string,  password: string): Observable<Usuario> {

    const url = environment.url + '/Usuario/login';

    return this._httpClient
      .post(url, {
        correoElectronico: correoElectronico,
        password: password
      })
      .pipe(map(r => <Usuario>r)); // Casteo

  }

  esAdministrador():boolean{
    return
  }
}
