import { Component, OnInit } from '@angular/core';
import {Cuarto} from "../../interfaces/cuarto";
import {CuartoRestService} from "../../servicios/rest/cuarto-rest.service";
import {importExpr} from "@angular/compiler/src/output/output_ast";
import {Piso} from "../../interfaces/piso";

@Component({
  selector: 'app-ruta-gestion-casa-cuartos',
  templateUrl: './ruta-gestion-casa-cuartos.component.html',
  styleUrls: ['./ruta-gestion-casa-cuartos.component.scss']
})
export class RutaGestionCasaCuartosComponent implements OnInit {

    cuartos =[];


    columnas = [
        {field: 'id', header: 'ID'},
        {field: 'tipoDeCuarto', header: 'Tipo de Cuarto'},
        {field: 'nivel', header: 'Nivel en Casa'},
        {field: 'id', header: 'Acciones'}
    ];


    constructor( private readonly _cuartoRestService: CuartoRestService) { }

  ngOnInit() {

      const cuartos$ = this._cuartoRestService.ListarCuarto()

      cuartos$.subscribe(
          (cuartos: Cuarto[])=>{
              console.log(cuartos)
              this.cuartos = cuartos;
          }, (error)=>{
              console.error('Error', error);
          }
      )

  }

    eliminar(cuarto: Cuarto) {

        const pisoEliminada$ = this._cuartoRestService.delete(cuarto.id);

        pisoEliminada$
            .subscribe(
                (cuartoEliminada: Cuarto) => {

                    alert(`Se ha elminado con exito el  cuarto`);
                    console.log('Se elimino:', cuartoEliminada);

                    const indice = this.cuartos
                        .findIndex((r) => r.id === cuarto.id);

                    this.cuartos.splice(indice, 1);


                },
                (error) => {
                    console.error('Error', error);
                }
            );

    }


}
