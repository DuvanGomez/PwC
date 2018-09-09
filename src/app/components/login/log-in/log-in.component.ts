import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styles: []
})
export class LogInComponent implements OnInit {
  public usuario: Usuario = new Usuario;
  id: number;
  alert: boolean;
  mensaje: string;
  tipo: string;
  constructor( private _data: DataService, private router: Router) {
    this.id = -1;
    this.alert = false;
    this.mensaje = '';
    this.tipo = 'alert-dismissible fade show';
  }
  ngOnInit() {
  }
  login() {
    const user =  new Usuario();
    user.email = this.usuario.email;
    user.password = this.usuario.password;
    this.id = this._data.buscarUsuario(user.email, user.password);
    this.respuesta(this.id);
    this.limpiar();
  }
  limpiar() {
    this.usuario.email = '';
    this.usuario.password = '';
  }
  respuesta(idx: number) {
    if (idx === -1 ) {
      this.alert = true;
      this.tipo = 'alert-danger ' + this.tipo;
      this.mensaje = 'Usuario no existente. Por favor, realice el registro';
    } else if (idx === -2) {
      this.alert = true;
      this.tipo = 'alert-warning ' + this.tipo;
      this.mensaje = 'Contraseña incorrecta';
    } else {
      this.router.navigate([`/usuario/`, idx]);
    }
  }
}
