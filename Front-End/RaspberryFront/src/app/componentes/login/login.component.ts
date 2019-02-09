import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../servicios/rest/auth.service";
import {UsuarioRestService} from "../../servicios/rest/usuario-rest.service";

// @ts-ignore
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario= {
    correoElectronico:'',
    password: '',
  };

  @Input()
  rol;

  constructor(
    private readonly  _authService:AuthService,
    private readonly _usuarioRestService: UsuarioRestService,
    private readonly _router: Router
  ) { }

  ngOnInit() {

  }


  login() {
    const respuestaLogin$ = this._authService
      .login(
        this.usuario.correoElectronico,
        this.usuario.password
      );

    respuestaLogin$
      .subscribe(
        (usuario) => {
          this._authService.usuario = usuario;
          this._authService.usuario.rol=usuario.rol;
          this.rol=usuario.rol;
          console.log(usuario);
          console.log(usuario.rol);
          console.log(this.rol);

          if(this.rol=='Administrador') {
            const url = [
              '/menu-admin'
            ];
            alert('Bienvenido ' + usuario.correoElectronico);
            this._router.navigate(url);
          }else{
            const url = [
              '/menu-usuario'
            ];
            alert('Bienvenido ' + usuario.correoElectronico);
            this._router.navigate(url);
          }

        },
        (error) => {
          console.error("ERROOOOR",error);
          alert('Correo y Password  incorrectos');
        }
      );
  }

  isAdmin():boolean{
   return this.rol==='Administrador';
  }
}
