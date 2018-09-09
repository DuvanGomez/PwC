import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styles: []
})
export class EditarUsuarioComponent {
  usuario: Usuario = new Usuario();
  idx: number;
  alert: boolean;
  mensaje: string;
  tipo: string;
  activar = false;
  mostrar = 'password';
  estado = 'Mostrar';

  constructor( private routeActivated: ActivatedRoute, private _data: DataService, private router: Router ) {
    this.routeActivated.parent.params.subscribe( parametros => {
      this.idx = parametros.id;
    });
    this.usuario = this._data.usuario(this.idx);
   }
   actualizar(idx: number) {
     if (this._data.guardarUsuarios() === true) {
        this.alert = true;
        this.tipo = 'alert-success';
        this.mensaje = 'Usuario actualizado correctamente!';
      } else {
        this.alert = true;
        this.tipo = 'alert-danger ';
        this.mensaje = 'No se logro actualizar la información. Verifique la información.';
      }
   }
   mostrarContrasena() {
    if (this.activar) {
      this.mostrar = 'text';
      this.estado = 'Ocultar';
      this.activar = !this.activar;
    } else {
      this.estado = 'Mostrar';
      this.mostrar = 'password';
      this.activar = !this.activar;
    }
   }
}
