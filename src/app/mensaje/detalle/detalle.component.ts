import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  id:string;
  mensaje:object;

  constructor(private route: ActivatedRoute,
              private servicio: AppService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id = params['id'];
      console.log("id: "+this.id);
      this.servicio.consultar(this.id).subscribe(res=>{
        this.mensaje = res.payload.val();
      })
    })
  }

}
