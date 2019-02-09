import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


// @ts-ignore
@Component({
    selector: 'app-formulario-actualizar-usuario',
    templateUrl: './formulario-actualizar-usuario.component.html',
    styleUrls: ['./formulario-actualizar-usuario.component.scss']
})
export class FormularioActualizarUsuarioComponent implements OnInit {

    @Input()
    nombre: string;

    @Input()
    nombreBoton: string;

    @Output()
    formularioValido= new EventEmitter()


    nombreUsuario: string;
    apellido: string;
    correoElectronico: string;
    rol: string;


    constructor() { }

    ngOnInit() {
        this.nombreUsuario = this.nombre
    }

    emitirFormularioValido() {
        const objetoUsuario = {
            nombre: this.nombreUsuario,
            apellido: this.apellido,
            correoElectronico: this.correoElectronico,
            rol : this.rol
        };
        this.formularioValido.emit(objetoUsuario);
    }

}

