import { Component, OnInit } from '@angular/core';
import {Cuarto} from "../../interfaces/cuarto";
import {CuartoRestService} from "../../servicios/rest/cuarto-rest.service";

@Component({
  selector: 'app-ruta-registro-cuarto',
  templateUrl: './ruta-registro-cuarto.component.html',
  styleUrls: ['./ruta-registro-cuarto.component.scss']
})
export class RutaRegistroCuartoComponent implements OnInit {

  constructor(private readonly _cuartoRestService: CuartoRestService) { }

  ngOnInit() {
  }


    crearCuarto(cuartoObjeto) {

        const crearCuarto$ = this._cuartoRestService
            .create(
                cuartoObjeto.tipoDeCuarto,
                cuartoObjeto.idPiso
            );

        crearCuarto$
            .subscribe(
                (cuarto: Cuarto) => {
                    console.log('Cuarto');
                    alert(`Cuarto creado: ${cuarto.tipoDeCuarto}`);
                },
                (error) => {
                    console.error('Error: ', error);
                }
            );


    }


}
