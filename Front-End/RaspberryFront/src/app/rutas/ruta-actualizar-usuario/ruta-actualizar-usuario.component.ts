import { Component, OnInit } from '@angular/core';
import { Usuario} from "../../interfaces/usuario";
import {UsuarioRestService} from "../../servicios/rest/usuario-rest.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-ruta-actualizar-usuario',
  templateUrl: './ruta-actualizar-usuario.component.html',
  styleUrls: ['./ruta-actualizar-usuario.component.scss']
})
export class RutaActualizarUsuarioComponent implements OnInit {

    usuarioAActualizar: Usuario;

  constructor(private readonly _usuarioRestService: UsuarioRestService,
              private readonly _router: Router,
              private readonly _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

      const rutaActiva$ = this._activatedRoute.params;

      rutaActiva$
          .subscribe(
              (parametros: ParametrosRutaActualizarUsuario) => {
                  const usuario$ = this._usuarioRestService
                      .findOneById(parametros.idUsuario);

                  usuario$
                      .subscribe(
                          (usuario: Usuario) => {
                              this.usuarioAActualizar = usuario;
                          },
                          (error) => {
                              console.error('Error: ', error);
                          }
                      );

              }
          );

  }

    actualizarUsuario(usuarioActualizado) {

        usuarioActualizado.id = this.usuarioAActualizar.id;

        const usuarioActualizada$ = this._usuarioRestService
            .updateOneById(usuarioActualizado);

        usuarioActualizada$
            .subscribe(
                (usuarioActualizada: Usuario) => {

                    const url = [
                        '/login/menu-admin/gestion-usuarios'
                    ];

                    alert('Raza actualizada ' + usuarioActualizada.nombre);

                    this._router.navigate(url);
                },
                (error) => {
                    alert('Ya existe un usario con el correo electrónico ingresado');
                    console.error('Error', error);
                }
            );
    }

    }

interface ParametrosRutaActualizarUsuario {
    idUsuario: string;
}