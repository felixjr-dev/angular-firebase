import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: []
})
export class ListadoComponent implements OnInit {

  mensajes: Observable<any[]>;

  constructor(private servicio: AppService) { }

  ngOnInit() {
    this.mensajes = this.servicio.listar();
  }

  eliminar(key:string){
    this.servicio.eliminar(key);
  }

}
