import { Component} from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-configurar-usuario',
  templateUrl: './configurar-usuario.component.html',
  styles: []
})
export class ConfigurarUsuarioComponent {
  idx: number;
  usuario: Usuario;
  constructor( private _data: DataService, private router: ActivatedRoute ) {
    this.router.parent.params.subscribe( parametros => {
      this.idx = parametros.id;
    });
    this.usuario = this._data.usuario(this.idx);
   }
   eliminar(idx: number) {
     this._data.eliminarUsuario(idx);
   }

}
