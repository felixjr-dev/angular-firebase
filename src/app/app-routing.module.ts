import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RegistroComponent } from './usuarios/registro/registro.component';
import { RecoverPassComponent } from './usuarios/recover-pass/recover-pass.component';

const routes: Routes = [{
  path:'usuarios',
  component:UsuariosComponent,
  children:[{
    path:'registro',
    component:RegistroComponent
  },
  {
    path:'recover',
    component:RecoverPassComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
