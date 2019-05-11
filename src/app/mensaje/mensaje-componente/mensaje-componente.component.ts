import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../../services/app.service';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-mensaje-componente',
  templateUrl: './mensaje-componente.component.html',
  styleUrls: []
})
export class MensajeComponenteComponent implements OnInit {

  nombre:string;
  mensaje:string;
  correo:string;
  imagePath: any;
  output: string;
  imgURL: string | ArrayBuffer;
  imgFile: File;
  fecha: string;
  carpeta:string;
  
  
  constructor(
    private servicio: AppService,
    private ng2ImgMaxService: Ng2ImgMaxService) {
   }

  ngOnInit() {
    this.carpeta ="imagenes";
  }

  agregar(){
    this.fecha = new Date().getTime().toString();
    let nombreArchivo= this.imgURL===null? null:this.fecha;
    nombreArchivo += "."+(this.imgFile.name.split("\.")[1]);
    this.servicio.agregar({
      nombre:this.nombre,
      correo:this.correo, 
      mensaje:this.mensaje, 
      imagen:this.imgURL,
      url:this.servicio.subirArchivo(this.carpeta+"/"+nombreArchivo, this.imgFile)
      });
      if(nombreArchivo!==null){
        ;
      }
  }

  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.output = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    this.imgFile = files[0];
    this.ng2ImgMaxService.resize([this.imgFile], 200, 200).subscribe((result)=>{
      console.log(result);
      reader.readAsDataURL(result); 
      reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
    });
  }

}
