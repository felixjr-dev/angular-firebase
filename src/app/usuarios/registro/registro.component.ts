import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  nombre:string;
  correo:string;
  clave:string;

  @Output() registrarEvent:EventEmitter<any> = new EventEmitter();

  constructor(private appServicio:AppService) { }

  ngOnInit() {
  }

  registrar(){
    this.appServicio.crearUsuario(this.correo, this.clave);
    this.registrarEvent.emit();
  }

}
