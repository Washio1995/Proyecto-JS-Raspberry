import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-formulario-cuarto',
  templateUrl: './formulario-cuarto.component.html',
  styleUrls: ['./formulario-cuarto.component.scss']
})
export class FormularioCuartoComponent implements OnInit {

    @Input()
    nombre: string;

    @Input()
    nombreBoton: string;

    @Output()
    formularioValido= new EventEmitter()


    tipoDeCuarto: string;
    idPiso: number;

    cuartos: SelectItem[];

  constructor() {

      this.cuartos = [
          {label:'Cocina', value:'Cocina'},
          {label:'Dormitorio', value:'Dormitorio'},
          {label:'Sala', value:'Sala'}

      ];
  }

  ngOnInit() {
  }

    emitirFormularioValido() {
        const objetoCuarto = {
            nombre: this.tipoDeCuarto,
            nivel: this.idPiso
        };
        this.formularioValido.emit(objetoCuarto);
    }

}
