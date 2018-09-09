import { Routes } from '@angular/router';

import { PerfilUsuarioComponent } from './perfil-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario.component';
import { ConfigurarUsuarioComponent } from './configurar-usuario.component';

export const USUARIO_ROUTES: Routes = [
    { path: 'perfil', component: PerfilUsuarioComponent },
    { path: 'editar', component: EditarUsuarioComponent},
    { path: 'configurar', component: ConfigurarUsuarioComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'perfil' }
];
