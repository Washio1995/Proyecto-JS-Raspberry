import { Component, OnInit } from '@angular/core';
import {UsuarioRestService} from "../../servicios/rest/usuario-rest.service";
import {Usuario} from "../../interfaces/usuario";

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {


    usuarios =[];


    columnas = [
        {field: 'nombre', header: 'Nombre'},
        {field: 'apellido', header: 'Apellido'},
        {field: 'correoElectronico', header: 'CorreoElectronico'},
        {field: 'rol', header: 'Rol'},
        {field: 'id', header: 'Acciones'},
    ];


    constructor(private readonly _usuarioRestService: UsuarioRestService) { }

  ngOnInit() {

      const usuarios$ = this._usuarioRestService.ListarUsuarios()

      usuarios$.subscribe(
          (usuarios: Usuario[])=>{
              console.log(usuarios)
              this.usuarios = usuarios;
          }, (error)=>{
              console.error('Error', error);
          }
      )
  }

    eliminar(usuario: Usuario) {

        const razaEliminada$ = this._usuarioRestService.delete(usuario.id);

        razaEliminada$
            .subscribe(
                (razaEliminada: Usuario) => {
                    console.log('Se elimino:', razaEliminada);

                    const indice = this.usuarios
                        .findIndex((r) => r.id === usuario.id);

                    this.usuarios.splice(indice, 1);


                },
                (error) => {
                    console.error('Error', error);
                }
            );


    }

}
