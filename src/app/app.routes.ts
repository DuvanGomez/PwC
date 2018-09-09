import { Routes, RouterModule } from '@angular/router';
// Rutas
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';
import { LOGIN_ROUTES } from './components/login/login.routes';
// Guards
import { LoginGuard } from './guards/login.guard';
import { LogoutGuard } from './guards/logout.guard';
// Componentes
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ LogoutGuard ],
    children: LOGIN_ROUTES
  },
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    canActivate: [ LoginGuard ],
    children: USUARIO_ROUTES
   },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
