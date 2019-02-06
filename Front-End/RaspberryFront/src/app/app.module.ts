import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { Ruta404Component } from './rutas/ruta404/ruta404.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaMenuComponent } from './rutas/ruta-menu/ruta-menu.component';
import { RutaInfoComponent } from './rutas/ruta-info/ruta-info.component';
import { RutaMenuAdminComponent } from './rutas/ruta-menu-admin/ruta-menu-admin.component';
import { RutaMenuUsuarioComponent } from './rutas/ruta-menu-usuario/ruta-menu-usuario.component';
import { RutaGestionUsuariosComponent } from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import { RutaGestionSensoresComponent } from './rutas/ruta-gestion-sensores/ruta-gestion-sensores.component';
import { RutaGestionCasaComponent } from './rutas/ruta-gestion-casa/ruta-gestion-casa.component';
import { RutaNotificacionesComponent } from './rutas/ruta-notificaciones/ruta-notificaciones.component';
import { RutaRecuperarContrasenaComponent } from './rutas/ruta-recuperar-contrasena/ruta-recuperar-contrasena.component';
import { RutaAccionesComponent } from './rutas/ruta-acciones/ruta-acciones.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    Ruta404Component,
    RutaLoginComponent,
    RutaMenuComponent,
    RutaInfoComponent,
    RutaMenuAdminComponent,
    RutaMenuUsuarioComponent,
    RutaGestionUsuariosComponent,
    RutaGestionSensoresComponent,
    RutaGestionCasaComponent,
    RutaNotificacionesComponent,
    RutaRecuperarContrasenaComponent,
    RutaAccionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
