import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-ventana',
  templateUrl: './formulario-ventana.component.html',
  styleUrls: ['./formulario-ventana.component.scss']
})
export class FormularioVentanaComponent implements OnInit {

    @Input()
    nombre: string;

    @Input()
    nombreBoton: string;

    @Output()
    formularioValido= new EventEmitter()


    nombreUsuario: string;
    apellido: string;
    correoElectronico: string;
    password: string;

    constructor() { }

    ngOnInit() {
        this.nombreUsuario = this.nombre
    }

    emitirFormularioValido() {
        const objetoUsuario = {
            nombre: this.nombreUsuario,
            apellido: this.apellido,
            correoElectronico: this.correoElectronico,
            password: this.password
        };
        this.formularioValido.emit(objetoUsuario);
    }


}
