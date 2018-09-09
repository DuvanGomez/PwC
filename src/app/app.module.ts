import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PerfilUsuarioComponent } from './components/usuario/perfil-usuario.component';
import { EditarUsuarioComponent } from './components/usuario/editar-usuario.component';
import { ConfigurarUsuarioComponent } from './components/usuario/configurar-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/login/registro/registro.component';
import { LogInComponent } from './components/login/log-in/log-in.component';
// Rutas
import { APP_ROUTING } from './app.routes';
// Servicios
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsuarioComponent,
    PerfilUsuarioComponent,
    EditarUsuarioComponent,
    ConfigurarUsuarioComponent,
    LoginComponent,
    RegistroComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
