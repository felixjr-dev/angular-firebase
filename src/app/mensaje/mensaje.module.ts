import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material/app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { environment } from './../../environments/environment';
import { MensajeComponenteComponent } from './mensaje-componente/mensaje-componente.component';
import { MensajeRoutingModule } from './mensaje-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [MensajeComponenteComponent, ListadoComponent, DetalleComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MensajeRoutingModule,
    Ng2ImgMaxModule
  ]
})
export class MensajeModule { }
