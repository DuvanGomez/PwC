import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public usuarios: Array<Usuario> = [];
  public resultado = false;
  constructor( private router: Router) {
    this.buscarUsuarios();
   }
  guardarUsuarios() {
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    return true;
  }
  buscarUsuarios() {
    if ( localStorage.getItem('usuarios') ) {
      this.usuarios = JSON.parse(localStorage.getItem('usuarios'));
    }
  }
  crearUsuario( usuario: Usuario) {
    const newUser = new Usuario();
    newUser.firstName = usuario.firstName;
    newUser.lastName = usuario.lastName;
    newUser.email = usuario.email;
    newUser.password = usuario.password;
    newUser.age = usuario.age;
    newUser.phoneNumber = usuario.phoneNumber;
    return newUser;
  }
  guardarUsuario(usuario: Usuario) {
    const newUser = new Usuario();
    newUser.firstName = usuario.firstName;
    newUser.lastName = usuario.lastName;
    newUser.email = usuario.email;
    newUser.password = usuario.password;
    newUser.age = usuario.age;
    newUser.phoneNumber = usuario.phoneNumber;
    this.usuarios.push(newUser);
    this.guardarUsuarios();
  }
  actualizarUsuario( idx: number, usuario: Usuario ) {
    let userTemp = new Usuario();
    userTemp = this.crearUsuario(usuario);
    this.usuarios.splice(idx, 1, userTemp);
    this.guardarUsuarios();
  }
  eliminarUsuario( id: number ) {
    this.usuarios.splice(id, 1);
    this.guardarUsuarios();
    this.logout();
  }
  buscarUsuario( e: string , pass: string ) {
    for (let i = 0; i < this.usuarios.length; i++) {
      // tslint:disable-next-line:curly
      if ( e === this.usuarios[i].email && pass === this.usuarios[i].password ) {
        localStorage.setItem('login', e);
        localStorage.setItem('token', JSON.stringify(i));
        return i;
      } else if ( e === this.usuarios[i].email && pass !== this.usuarios[i].password) {
        const Z = -2;
        return Z;
      }
    }
    return -1;
  }
  logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
  usuario(idx: number) {
    idx = this.sesionActual(idx);
    return this.usuarios[idx];
  }
  sesionActual( id: number) {
    const token = JSON.parse(localStorage.getItem('token'));
    if ( token === Number(id)) {
      return Number(id);
    } else if ( token !== Number(id)) {
      id = JSON.parse(localStorage.getItem('token'));
      this.router.navigate(['/usuario/' + id]);
      return Number(id);
    }
  }
  existeConexion() {
    if (localStorage.getItem('login') !== null) {
      return true;
    } else {
      return false;
    }
  }
}
