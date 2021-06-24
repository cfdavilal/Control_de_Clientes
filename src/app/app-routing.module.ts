import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TableroComponent } from './components/tablero/tablero.component';
import { AuthGuard } from './guardianes/auth.guard';
import { ConfiguracionGuard } from './guardianes/configuracion.guard';

const routes: Routes = [
  {path: '', component: TableroComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'registrarse', component: RegistroComponent, canActivate: [ConfiguracionGuard]},
  {path: 'configuracion', component: ConfiguracionComponent, canActivate: [AuthGuard]},
  {path: 'cliente/editar/:id', component: EditarClienteComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
