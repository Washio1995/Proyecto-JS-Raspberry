import { Component, OnInit } from '@angular/core';
import {PisoRestService} from "../../servicios/rest/piso-rest.service";
import {Piso} from "../../interfaces/piso";

@Component({
  selector: 'app-ruta-registro-piso',
  templateUrl: './ruta-registro-piso.component.html',
  styleUrls: ['./ruta-registro-piso.component.scss']
})
export class RutaRegistroPisoComponent implements OnInit {

  constructor(private readonly _pisoRestService: PisoRestService) { }

  ngOnInit() {
  }

    crearPiso(pisoObjeto) {

        const crearPiso$ = this._pisoRestService
            .create(
                pisoObjeto.nivel,
                pisoObjeto.idCasa
            );

        crearPiso$
            .subscribe(
                (piso: Piso) => {
                    console.log('Piso');
                    alert(`Piso creado de nive;: ${piso.nivel}`);
                },
                (error) => {
                    alert(`Ya existe un piso registrado con ese nivel`)
                    console.error('Error: ', error);
                }
            );


    }


}
