import {Component, Input, OnInit, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {


    @Input()
    nombre: string;

    @Input()
    nombreBoton: string;

    @Input()
    formularioValido= new EventEmitter()

    nombreUsuario: string;
    correoElectronico: string;
    fechaNacimiento: string;


    constructor() { }

    ngOnInit() {
        this.nombreUsuario = this.nombre
    }

    emitirFormularioValido() {
        const objetoUsuario = {
            nombre: this.nombreUsuario,
            correoElectronico: this.correoElectronico,
            fechaNacimiento: this.fechaNacimiento
        };
        this.formularioValido.emit(objetoUsuario);
    }



}
