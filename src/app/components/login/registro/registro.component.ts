import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {
  public usuario: Usuario = new Usuario;
  public alert: boolean;
  public mensaje: string;
  public tipo: string;
  constructor( private data: DataService ) {
    this.alert = false;
    this.mensaje = '';
    this.tipo = 'alert-dismissible fade show';
   }

  ngOnInit() {
  }
  limpiar() {
    this.usuario.firstName = '';
    this.usuario.lastName = '';
    this.usuario.email = '';
    this.usuario.password = '';
    this.usuario.age = null;
    this.usuario.phoneNumber = null;
  }
  guardar() {
    this.data.guardarUsuario(this.usuario);
    this.limpiar();
    if (JSON.parse(localStorage.getItem('usuarios'))) {
      this.alert = true;
      this.tipo = 'alert-success ' + this.tipo;
      this.mensaje = 'Registro éxitoso';
    } else {
      this.alert = true;
      this.tipo = 'alert-danger ' + this.tipo;
      this.mensaje = 'Registro fallido, intente nuevamente';
    }
  }
}
