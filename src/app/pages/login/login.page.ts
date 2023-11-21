import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard, AnimationController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';
import type { Animation } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef })
  card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;

  email:string = "";
  contrasena:string = "";

  constructor(
    private router:Router,
    private helperService:HelperService,
    private storage:StorageService,
    private animationCtrl: AnimationController,
    private auth:AngularFireAuth

    
    ) { }

    ngAfterViewInit() {
      this.animation = this.animationCtrl
        .create()
        .addElement(this.card.nativeElement)
        .duration(1500)
        .iterations(Infinity)
        .direction('alternate')
        .fromTo('background', 'blue', 'var(--background)');
    }
    ionViewDidEnter() {
      this.animation.play();
    }
  
    ionViewDidLeave() {
      this.animation.pause();
    }


  ngOnInit() {
    console.log("Resultado suma ---> ", this.helperService.sumar(50,100));
    
  }


  async login(){
    
    const loader = await this.helperService.showLoading("Cargando");
    if (this.email == "") {
      this.helperService.showAlert("Debe ingresar un email.","Error");
      loader.dismiss();
      return;
    }
    if (this.contrasena == "") {
      this.helperService.showAlert("Debe ingresar una contraseña.","Error");
      loader.dismiss();
      return;
    }

    try {
      this.storage.userCorreo = this.email;
      const req = await this.auth.signInWithEmailAndPassword(this.email,this.contrasena);
      console.log("TOKEN",await req.user?.getIdToken());
      loader.dismiss();
      await this.router.navigateByUrl('menu');
    } catch (error) {
      loader.dismiss();
      this.helperService.showAlert("Verifique sus credenciales","Error")
      
    }
  }




  loginRegistro(){

    this.router.navigateByUrl("login-registro");
  
  }

 loginRecuperacion(){
  this.router.navigateByUrl("login-recuperacion");
 }

}


