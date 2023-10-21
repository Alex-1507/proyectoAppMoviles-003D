import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseError } from 'firebase/app';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';
import { initializeApp } from '@angular/fire/app/firebase';


@Component({
  selector: 'app-login-recuperacion',
  templateUrl: './login-recuperacion.page.html',
  styleUrls: ['./login-recuperacion.page.scss'],
})
export class LoginRecuperacionPage implements OnInit {
  
  public alertButtons = ['OK'];
  email: string="";
  contrasena: string=""
  nuevaContrasena: string = '';
  emailRecuperacion:string = '';
  mensaje:string="";
  usuario:any;
  mostrarMensaje:boolean= false;


  constructor(
    private router:Router,
    private auth: AngularFireAuth,
    private helperService:HelperService,
    private storage:StorageService,
  
    
    ) { }
  ngOnInit() {
    
  }
  
 volverLogin(){
  this.router.navigateByUrl("login")
 }


cerrarMensaje(){
  this.mostrarMensaje = false;
  this.mensaje = '';
  this.emailRecuperacion = '';
  this.usuario = '';
}


 async resetPassword() {
  const loader = await this.helperService.showLoading("Enviando correo de recuperación");
  const usuario = (await this.storage.obtenerUsuario()).filter(u => u.correo == this.emailRecuperacion);
  if (usuario){ 
  try {

    await this.auth.sendPasswordResetEmail(this.emailRecuperacion);
    await loader.dismiss();
    await this.helperService.showAlert("Correo de recuperación enviado correctamente", "Éxito");
    await this.router.navigateByUrl('login');
  } catch (error: any) {
    await loader.dismiss();
    if (error.code === 'auth/invalid-email') {
      await this.helperService.showAlert("Error en el formato del correo", "Error");
    } else if (error.code === 'auth/user-not-found') {
      await this.helperService.showAlert("Usuario no encontrado", "Error");
    } else {
      await this.helperService.showAlert("Ocurrió un error inesperado" + error.code, "Error");
    }
  }
} 
}




  }//FIN DEL TSSS


