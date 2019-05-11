import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover-pass.component.html',
  styleUrls: ['./recover-pass.component.scss']
})
export class RecoverPassComponent implements OnInit {

  correo:string;
  @Output()
  recuperarPassEvent:EventEmitter<any> = new EventEmitter();
  
  constructor(private appServicio:AppService,
              private dialogRef: MatDialogRef<RecoverPassComponent>) { }

  ngOnInit() {
  }

  recuperar(){
    this.appServicio.recuperarCuenta(this.correo).then(
      ()=>{
        this.dialogRef.close();
      }
    )
    this.recuperarPassEvent.emit();
  }

}
