import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-piso',
  templateUrl: './formulario-piso.component.html',
  styleUrls: ['./formulario-piso.component.scss']
})
export class FormularioPisoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    @Input()
    nombre: string;

    @Input()
    nombreBoton: string;

    @Output()
    formularioValido= new EventEmitter();


    nivel: number;
    idCasa:{
     id: number;
    }
    emitirFormularioValido() {
        const objetoPiso = {
            nivel: this.nivel,
            idCasa: this.idCasa
        };
        this.formularioValido.emit(objetoPiso);
    }

}
