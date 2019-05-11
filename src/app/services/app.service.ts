import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  

  mensajesRef: AngularFireList<any>;
  constructor(public db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private auth: AngularFireAuth) { 
    this.mensajesRef = db.list('mensajes');
  }

  listar(){
    return this.mensajesRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({key:c.payload.key, ... c.payload.val()}))
        )
    )
  }

  agregar(mensaje:object){
    console.log(mensaje);
    this.mensajesRef.push(mensaje);
  }
  
  eliminar(key:string){
    this.mensajesRef.remove(key);
  }

  async subirArchivo(nombre:string, imagen:File){
    const ref = this.storage.ref(nombre);
    await ref.put(imagen);
    await ref.getDownloadURL().subscribe(res=>{return res;});
  }

  autenticar(usuario:string, clave:string){
    return this.auth.auth.signInWithEmailAndPassword(usuario,clave)
  }

  cerrarSesion(){
    console.error("Servicio cerrando sesion");
    localStorage.removeItem("usuario");
    return this.auth.auth.signOut();
  }

  estaAutenticado():boolean{
    console.error(localStorage.getItem("usuario"));
    if(localStorage.getItem("usuario") === null){
      this.auth.auth.onAuthStateChanged(user=>{
        if(user){
          console.error("Firebase user:" + user);
          return true;
        }else{
          return false;
        }
      });
    }else{
      return true;
    }
  }

  crearUsuario(correo: string, clave: string) {
    console.log("Registrando usuario: " + correo)
    this.auth.auth.createUserWithEmailAndPassword(correo,clave)
    .then(resp=>{
      
    })
    .catch(err=>{
      console.error(err);
    })
  }

  consultar(id: string){
    return this.db.object("mensajes/"+id).snapshotChanges();
  }

  recuperarCuenta(correo: string) {
    return this.auth.auth.sendPasswordResetEmail(correo);
  }


}
