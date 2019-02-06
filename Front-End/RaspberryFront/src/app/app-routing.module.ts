import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaMenuComponent} from "./rutas/ruta-menu/ruta-menu.component";
import {Ruta404Component} from "./rutas/ruta404/ruta404.component";
import {RutaInfoComponent} from "./rutas/ruta-info/ruta-info.component";
import {RutaMenuAdminComponent} from "./rutas/ruta-menu-admin/ruta-menu-admin.component";
import {RutaMenuUsuarioComponent} from "./rutas/ruta-menu-usuario/ruta-menu-usuario.component";
import {RutaGestionUsuariosComponent} from "./rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component";
import {RutaGestionSensoresComponent} from "./rutas/ruta-gestion-sensores/ruta-gestion-sensores.component";
import {RutaGestionCasaComponent} from "./rutas/ruta-gestion-casa/ruta-gestion-casa.component";
import {RutaRecuperarContrasenaComponent} from "./rutas/ruta-recuperar-contrasena/ruta-recuperar-contrasena.component";
import {RutaNotificacionesComponent} from "./rutas/ruta-notificaciones/ruta-notificaciones.component";
import {RutaAccionesComponent} from "./rutas/ruta-acciones/ruta-acciones.component";

const routes: Routes = [
    {
      path: '',
        pathMatch: 'full',
        redirectTo: 'inicio'
    },
    {
      path: 'inicio',
        component: RutaInicioComponent
    },
    {
        path: 'info',
        component: RutaInfoComponent
    },
    {
        path: 'recuperar-contrasena',
        component: RutaRecuperarContrasenaComponent
    },
    {
      path: 'login',
      component: RutaLoginComponent,
        children: [
            {
                path: 'menu-admin',
                component: RutaMenuAdminComponent,
                children: [
                    {
                        path: 'gestion-usuarios',
                        component: RutaGestionUsuariosComponent
                    },
                    {
                        path: 'gestion-sensores',
                        component: RutaGestionSensoresComponent
                    },
                    {
                        path: 'gestion-casa',
                        component: RutaGestionCasaComponent
                    }
                ]
            },
            {
                path: 'menu-usuario.ts',
                component: RutaMenuUsuarioComponent,
                children: [
                    {
                        path: 'notificaciones',
                        component: RutaNotificacionesComponent
                    },
                    {
                        path: 'acciones',
                        component: RutaAccionesComponent
                    }
                ]
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'no-encontrado'
    },
    {
        path:'no-encontrado',
        component: Ruta404Component
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
