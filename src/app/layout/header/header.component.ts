import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  estaAutenticado:boolean;
  @Output() cerrarSesionEvent:EventEmitter<any> = new EventEmitter();

  constructor(private authService: AppService,
              private router: Router) { 

  }

  ngOnInit() {
  }

  cerrarSesion(){
    this.authService.cerrarSesion().then(res=>{
      this.estaAutenticado = false;
      this.router.navigate(['/']);
      this.cerrarSesionEvent.emit();
    })
    .finally(()=>{
      
    })
    
    
  }

}
