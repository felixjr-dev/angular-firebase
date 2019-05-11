import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from './services/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  estaAutenticado:boolean;
  correo:string;
  clave:string;

  constructor(private authService: AppService){
    this.estaAutenticado = authService.estaAutenticado();
    console.log("APPCOMP: " + this.estaAutenticado);
  }

  autenticar(){
    console.log("APPCOMP: " + this.estaAutenticado);
    if(this.authService.estaAutenticado()){
      this.authService.cerrarSesion();
      this.estaAutenticado = false;
    }else{
        this.estaAutenticado = true;
    }

  }
}
