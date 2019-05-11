import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { MatDialog } from '@angular/material/dialog';
import { RegistroComponent } from '../registro/registro.component';
import { RecoverPassComponent } from '../recover-pass/recover-pass.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() autenticadoEvent:EventEmitter<any> = new EventEmitter();

  correo:string;
  clave:string;

  constructor(private authService:AppService,
              private dialogo:MatDialog) { }

  ngOnInit() {
  }

  autenticar(){
    this.authService.autenticar(this.correo,this.clave)
      .then(usuario=>{
        localStorage.setItem("usuario",usuario.user.email);
        this.autenticadoEvent.emit();
        }
      ).catch(err=>{
        console.error(err);
      });
  }

  mostrarDialogo(componente:string){
    if(componente==="registrar"){
      const regDialogRef = this.dialogo.open(RegistroComponent,
        {
          width:"200px"
        }
      )
      regDialogRef.componentInstance.registrarEvent.subscribe(e=>{
        regDialogRef.close();
      });
    }else if(componente==="recoverPass"){
      const recoverDialogRef = this.dialogo.open(RecoverPassComponent,
        {
          width:"200px"
        }
      );
    }
  }

}
