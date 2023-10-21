import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LocationService } from 'src/app/services/location.service';
import { Region } from 'src/app/models/region';
import { Comuna } from 'src/app/models/comuna';


@Component({
  selector: 'app-login-registro',
  templateUrl: './login-registro.page.html',
  styleUrls: ['./login-registro.page.scss'],
})
export class LoginRegistroPage implements OnInit {
  
    public alertButtons = ['OK'];
    nombre: string="";
    email: string="";
    contrasena: string="";

    regiones:Region[]=[];
    comunas:Comuna[]=[];
    regionSeleccionado:number = 0;
    comunaSeleccionada:number = 0;

    constructor(
     private auth:AngularFireAuth, 
    private helper:HelperService,
    private router:Router,
    private storageService:StorageService,
    private locationService:LocationService
    ) { }

  ngOnInit(){
    this.viewUser();
    this.cargarRegion();
  }

  async cargarRegion(){
    const req = await this.locationService.getRegion();
    this.regiones = req.data;
    console.log("REGION",this.regiones);
  }

  async cargarComuna(){
    const req = await this.locationService.getComuna(this.regionSeleccionado);
    this.comunas = req.data;
  }



  async viewUser() {
    console.log("Usuarios registrados.", this.storageService.obtenerUsuario());
  }

  async registro(){
    const loader = await this.helper.showLoading("Cargando");
    try {
      var user = 
      [
        {
          correo:this.email,
          contrasena:this.contrasena
        }
      ]
      const request = await this.auth.createUserWithEmailAndPassword(this.email,this.contrasena);
      this.storageService.agregarUsuario(user);
      await this.helper.showAlert("Usuario registrado corretamente","Información");
      await this.router.navigateByUrl('login');
      await loader.dismiss();
    } catch (error:any) {
      if(error.code == 'auth/invalid-email'){
        await loader.dismiss();
        await this.helper.showAlert("Error en el formato del correo","Error");
      }
      if(error.code == 'auth/weak-password'){
        await loader.dismiss();
        await this.helper.showAlert("El largo de la contraseña es incorrecto","Error");
      }
      
    }
  }




  logOut(){
    this.router.navigateByUrl("login");
  }






}
