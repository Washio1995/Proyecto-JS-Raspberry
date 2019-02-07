import { Component, OnInit } from '@angular/core';
import {Piso} from "../../interfaces/piso";
import {PisoRestService} from "../../servicios/rest/piso-rest.service";
import {Usuario} from "../../interfaces/usuario";

@Component({
  selector: 'app-ruta-gestion-casa-pisos',
  templateUrl: './ruta-gestion-casa-pisos.component.html',
  styleUrls: ['./ruta-gestion-casa-pisos.component.scss']
})
export class RutaGestionCasaPisosComponent implements OnInit {

    pisos =[];

    columnas = [
        {field: 'id', header: 'ID'},
        {field: 'nivel', header: 'Nivel de piso'},
        {field: 'idCasa', header: 'ID de Casa'},
        {field: 'id', header: 'Acciones'}
    ];

  constructor(private readonly _pisoRestService: PisoRestService) { }

  ngOnInit() {

      const pisos$ = this._pisoRestService.ListarPisos()

      pisos$.subscribe(
          (pisos: Piso[])=>{
              console.log(pisos)
              this.pisos = pisos;
          }, (error)=>{
              console.error('Error', error);
          }
      )

  }

    eliminar(piso: Piso) {

        const pisoEliminada$ = this._pisoRestService.delete(piso.id);

        pisoEliminada$
            .subscribe(
                (pisoEliminada: Piso) => {

                    alert(`Se ha elminado con exito el piso`);
                    console.log('Se elimino:', pisoEliminada);

                    const indice = this.pisos
                        .findIndex((r) => r.id === piso.id);

                    this.pisos.splice(indice, 1);


                },
                (error) => {
                    console.error('Error', error);
                }
            );

    }


}
