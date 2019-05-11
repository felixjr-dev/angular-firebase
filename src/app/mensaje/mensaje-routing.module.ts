import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensajeComponenteComponent } from './mensaje-componente/mensaje-componente.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  {
    path:'mensaje',
    component:MensajeComponenteComponent,
    children:[
      {
        path:'detalles/:id',
        component: DetalleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MensajeRoutingModule { }
