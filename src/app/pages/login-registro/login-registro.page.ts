import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LocationService } from 'src/app/services/location.service';
import { Region } from 'src/app/models/region';
import { Comuna } from 'src/app/models/comuna';
import { Usuario } from 'src/app/models/usuario';


@Component({
  selector: 'app-login-registro',
  templateUrl: './login-registro.page.html',
  styleUrls: ['./login-registro.page.scss'],
})
export class LoginRegistroPage implements OnInit {
  
    public alertButtons = ['OK'];
    nombre: string="";
    apellido: string="";
    genero:string="";
    edad: string="";
    email: string="";
    contrasena: string="";
    cuenta:string=""; 

    regiones:Region[]=[];
    comunas:Comuna[]=[];
    regionSeleccionada:number = 0;
    comunaSeleccionada:number = 0;
    regionSeleccionadaId = this.regionSeleccionada;
    comunaSeleccionadaId = this.comunaSeleccionada;
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
    const req = await this.locationService.getComuna(this.regionSeleccionada);
    this.comunas = req.data;
  }



  async viewUser() {
    console.log("Usuarios registrados.", this.storageService.obtenerUsuario());
  }

  async registro(){
    
    const loader = await this.helper.showLoading("Cargando");
    if (!this.nombre || !this.apellido || !this.edad || !this.email || !this.contrasena || !this.cuenta || !this.regionSeleccionada || !this.comunaSeleccionada) {
      await loader.dismiss();
      await this.helper.showAlert("Por favor, complete todos los campos", "Error");
      return; 
    }
    const regionSeleccionadaId = this.regionSeleccionada;
    const comunaSeleccionadaId = this.comunaSeleccionada;
    const regionSeleccionada = this.regiones.find(region => region.id === regionSeleccionadaId);
    const comunaSeleccionada = this.comunas.find(comuna => comuna.id === comunaSeleccionadaId);
    
    try {
      var user = 
      [
        {
          
          nombre:this.nombre,
          apellido:this.apellido,
          edad:this.edad,
          correo:this.email,
          contrasena:this.contrasena,
          cuenta:this.cuenta,
          region: regionSeleccionada ? regionSeleccionada.nombre : '', // Usar el nombre si se encuentra, de lo contrario vacío
          comuna: comunaSeleccionada ? comunaSeleccionada.nombre : '',
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
