import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Sensor} from "../../interfaces/sensor";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class SensorRestService {

    nombreModelo: '/Sensor';

    constructor(private readonly _httpClient: HttpClient) {

    }

    ListarSensores():Observable<Sensor[]> {
        //Observable
        const sensores$ =
            this._httpClient
                .get(environment.url2+this.nombreModelo)
                .pipe(map(r => <Sensor[]> r))
        return sensores$;
    }


}
