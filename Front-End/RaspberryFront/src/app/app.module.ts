import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core'
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
import { FormularioUsuarioComponent } from './componentes/formulario-usuario/formulario-usuario.component';
import { RutaRegistroComponent } from './rutas/ruta-registro/ruta-registro.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UsuarioRestService} from "./servicios/rest/usuario-rest.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {MenuModule} from "primeng/menu";
import {TableModule} from "primeng/table";
import {
    BreadcrumbModule,
    CardModule,
    ChartModule,
    InputTextModule,
    MessageModule,
    MessagesModule, PanelMenuModule, StepsModule, TabMenuModule
} from "primeng/primeng";
import { RutaGestionCasaPisosComponent } from './rutas/ruta-gestion-casa-pisos/ruta-gestion-casa-pisos.component';
import { RutaGestionCasaCuartosComponent } from './rutas/ruta-gestion-casa-cuartos/ruta-gestion-casa-cuartos.component';
import { RutaGestionCasaSensoresComponent } from './rutas/ruta-gestion-casa-sensores/ruta-gestion-casa-sensores.component';
import { RutaGestionCasaVentanasComponent } from './rutas/ruta-gestion-casa-ventanas/ruta-gestion-casa-ventanas.component';
import { FormularioPisoComponent } from './componentes/formulario-piso/formulario-piso.component';
import { RutaRegistroPisoComponent } from './rutas/ruta-registro-piso/ruta-registro-piso.component';
import { RutaRegistroCuartoComponent } from './rutas/ruta-registro-cuarto/ruta-registro-cuarto.component';
import { RutaRegistroVentanaComponent } from './rutas/ruta-registro-ventana/ruta-registro-ventana.component';
import { FormularioVentanaComponent } from './componentes/formulario-ventana/formulario-ventana.component';
import { FormularioCuartoComponent } from './componentes/formulario-cuarto/formulario-cuarto.component';


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
    RutaAccionesComponent,
    FormularioUsuarioComponent,
    RutaRegistroComponent,
    RutaGestionCasaPisosComponent,
    RutaGestionCasaCuartosComponent,
    RutaGestionCasaSensoresComponent,
    RutaGestionCasaVentanasComponent,
    FormularioPisoComponent,
    RutaRegistroPisoComponent,
    RutaRegistroCuartoComponent,
    RutaRegistroVentanaComponent,
    FormularioVentanaComponent,
    FormularioCuartoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      ButtonModule,
      MenuModule,
      TableModule,
      InputTextModule,
      MessagesModule,
      MessageModule,
      CardModule,
      ChartModule,
      BreadcrumbModule,
      PanelMenuModule,
      TabMenuModule,
      StepsModule

  ],
  providers: [
      UsuarioRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
