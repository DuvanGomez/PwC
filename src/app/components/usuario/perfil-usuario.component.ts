import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-perfil-usuario',
  template: `
  <div class="container animated fadeIn">
    <div class="row d-flex justify-content-center">

      <!--<div class="col-md-4" *ngIf="profile">
        <img [src]="profile" alt="" class="img-fluid">
      </div>-->
      <div class="col-md-8">
        <ul class="list-group">
          <li class="list-group-item">{{ "Nombre: " + perfil.firstName + " " + perfil.lastName }}</li>
          <li class="list-group-item">{{ "Edad: " + perfil.age + " años"}}</li>
          <li class="list-group-item">{{ "Telefono: " + perfil.phoneNumber }}</li>
          <li class="list-group-item">{{ "Email: " + perfil.email }}</li>
        </ul>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class PerfilUsuarioComponent {
  idx: number;
  perfil: Usuario = new Usuario();

  constructor( private router: ActivatedRoute, private _data: DataService ) {
    this.router.parent.params.subscribe( parametros => {
      this.idx = parametros.id;
    });
    this.perfil = this._data.usuario(this.idx);
   }
}
