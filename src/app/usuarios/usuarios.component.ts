import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  correo:string;
  clave:string;

  constructor(private authServicio: AppService) { }

  ngOnInit() {
  }

  crearUsuario(){
    this.authServicio.crearUsuario(this.correo,this.clave);
  }

}
