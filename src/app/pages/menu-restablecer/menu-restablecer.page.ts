import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirebaseError } from 'firebase/app';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-menu-restablecer',
  templateUrl: './menu-restablecer.page.html',
  styleUrls: ['./menu-restablecer.page.scss'],
})
export class MenuRestablecerPage implements OnInit {
  email: string="";
  contrasena: string=""
  nuevaContrasena: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private helperService:HelperService,
    private storage:StorageService,

  ) { }

  
  menuPrincipal(){
    this.router.navigateByUrl("menu");
  }
  ngOnInit() {
  }

  async cambiarContrasena() {

    try {
      const nuevaContrasena = (document.querySelector('#nuevaContra') as HTMLInputElement).value;

      const user = this.afAuth.currentUser;

      if (user) {
        user.then(userData => {
          if (userData) {
            userData.updatePassword(this.nuevaContrasena)
              .then(() => {
                this.helperService.showAlert("Contraseña actualizada con éxito","Alerta")

              })
              .catch(error => {
                this.helperService.showAlert("Error al cambiar la contraseña","Error")
              });
          } else {
            this.helperService.showAlert("Ingrese una nueva contraseña válida","Error")
          }
        });
      } 
    } catch (error:any) {
      console.error(error);
      this.helperService.showAlert("Error al cambiar contraseña","Error")
    }
  }

  mostrarMensaje(mensaje: string) {
    // Función para mostrar mensajes en tu aplicación, puedes implementarla según tus necesidades
    console.log(mensaje);
  }

  async mandarCorreo(){

    const correoRecuperacion = (document.querySelector('#correoRecuperacion') as HTMLInputElement).value;
    const auth = getAuth();
  
    if (correoRecuperacion == ""){
      this.helperService.showAlert("Ingrese un correo valido ","Error")
      //return;
    }else{
      sendPasswordResetEmail(auth, correoRecuperacion)
      .then(() => {
        this.helperService.showAlert("Correo de recuperacion enviado ","Success")
        // Password reset email sent!
      // ..
      })
    }
  
    const usuario = await this.storage.obtenerUsuario
  }







}//FIN DE TSSSSSSS
