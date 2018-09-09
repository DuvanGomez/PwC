import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {
  index: number;
  constructor( public _data: DataService, private router: ActivatedRoute ) {
    this.index = JSON.parse(localStorage.getItem('token'));
    _data.existeConexion();
   }
  salir() {
   this._data.logout();
  }
}
