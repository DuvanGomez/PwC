import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { RegistroComponent } from './registro/registro.component';

export const LOGIN_ROUTES: Routes = [
    { path: 'logIn', component: LogInComponent },
    { path: 'registro', component: RegistroComponent},
 { path: '**', pathMatch: 'full', redirectTo: 'logIn' }
];
