import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.scss']
})
export class FormularioUsuarioComponent implements OnInit {


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
