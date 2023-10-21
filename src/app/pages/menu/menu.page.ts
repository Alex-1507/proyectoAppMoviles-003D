import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard , AnimationController, MenuController} from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { Menu } from 'src/app/models/menu';
import { HelperService } from 'src/app/services/helper.service';
import { Device } from '@capacitor/device';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit, OnDestroy {

  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;
  private animation!: Animation;

  menuArray:Menu[]=[];
  loading:boolean =true;

  constructor(
    private router:Router,
    private animationCtrl: AnimationController,
    private menuCtrl:MenuController,
    private helper:HelperService,
    private auth: AngularFireAuth

    ) { }


    toggle(){
      this.menuCtrl.toggle();
    }

    async dispositivo(){
      const device = await   Device.getInfo();
      console.log("Información",device);
      await this.helper.showToast("Su dispositivo es: " + device.model);
    }

    cargarMenu(){
      
      this.menuArray.push(
        { 
          id:1,
          titulo:"Solicitar vehículo",
          url:"/menu-uno",
          icono:"car-sport-outline",
          
        },
  /*       { 
          id:2,
          titulo:"Disponibilizar",
          url:"/menu-dos",
          icono:"skull-outline",
        
        }, */
      );
    }
    
    simularCargaMenu = () => {
      this.loading = false;
    }

   
cerrarMenu(){
  this.menuCtrl.close();
}


    ngAfterViewInit() {
      this.animation = this.animationCtrl
        .create()
        .addElement(document.querySelectorAll(".ion-card"))
        .duration(1500)
        .iterations(Infinity)
        .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
        .fromTo('opacity', '1', '0.2');
    }


    
    play(){
      this.animation.play();
    }

    pause(){
      this.animation.pause();
    }

    stop(){
      this.animation.stop();
    }



  ngOnDestroy(): void {
    console.log("Destruyendo la vista");
  }

  ngOnInit() {
    this.cargarMenu();
    console.table(this.menuArray);
    /* console.error("Soy un error!!!!")    */ 
    console.log("inicio del componente");
    setTimeout(this.simularCargaMenu,1500);
    this.dispositivo();
  }

  ionViewWillEnter(){
    console.log("Entrando a la vista");
  }

  ionViewDidEnter(){
    console.log("Vista cargada");
  }

  ionViewWillLeave(){
    console.log("Abandonando la vista");
  }

  ionViewDidLeave(){
    console.log("Abandonó la vista");
  }

  async logOut(){
    //
    var confirmar = await this.helper.showConfirm("Desea cerrar la sesión actual?","Confirmar","Cancelar");
    if (confirmar == true) {
      await this.auth.signOut();
      await this.router.navigateByUrl("login");
    }
  }

 perfil(){
  this.router.navigateByUrl("perfil")
  this.menuCtrl.close();
 }
 

  menuSolicitar(){
    this.router.navigateByUrl("menu-soli");
  }

  menuDispo(){
    this.router.navigateByUrl("menu-dispo");
  }

  agregarVehiculo(){
    this.router.navigateByUrl("agregar-vehiculo")
  }

  agregarUsuario(){
    this.router.navigateByUrl("agregar-usuario")
  }
  
  cambiarContra(){
    this.router.navigateByUrl("menu-restablecer")
  }
/*   menuDos(){
    var nom = "pgy4121";
    this.router.navigateByUrl("menu-dos");
  } */

}
