import { Component, OnInit } from '@angular/core';
import { UsuarioRestService} from "../../servicios/rest/usuario-rest.service";
import {Usuario} from "../../interfaces/usuario";

@Component({
  selector: 'app-ruta-registro',
  templateUrl: './ruta-registro.component.html',
  styleUrls: ['./ruta-registro.component.scss']
})
export class RutaRegistroComponent implements OnInit {

  constructor(private readonly _usuarioRestService: UsuarioRestService) { }

  ngOnInit() {
  }

    crearUsuario(usuarioObjeto) {

        const crearUsuario$ = this._usuarioRestService
            .create(
                usuarioObjeto.nombre,
                usuarioObjeto.apellido,
                usuarioObjeto.correoElectronico,
                usuarioObjeto.password
            );

        crearUsuario$
            .subscribe(
                (usuario: Usuario) => {
                    console.log('Usuario');
                    alert(`Usuario creado: ${usuario.nombre}`);
                },
                (error) => {
                    console.error('Error: ', error);
                }
            );


    }


}
