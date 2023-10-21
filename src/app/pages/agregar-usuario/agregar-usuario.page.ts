import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { Region } from 'src/app/models/region';
import { Comuna } from 'src/app/models/comuna';
import { StorageService } from 'src/app/services/storage.service';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { Preferences } from '@capacitor/preferences';
import { InfoUsuarioPage } from 'src/app/modals/info-usuario/info-usuario.page';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.page.html',
  styleUrls: ['./agregar-usuario.page.scss'],
})
export class AgregarUsuarioPage implements OnInit {
  
  regiones:Region[]=[];
  comunas:Comuna[]=[];
  usuarios:Usuario[]=[];
  regionSeleccionada:number = 0 ;
  comunaSeleccionada:number = 0;


  constructor(
    private auth:AngularFireAuth, 
    private helper:HelperService,
    private router:Router,
    private storageService:StorageService,
    private locationService:LocationService
  ) { }
  menuPrincipal(){
    this.router.navigateByUrl("menu");
  }
  ngOnInit() {
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

  async agregarUsuario() {
    var confirmar = await this.helper.showConfirm("¿Desea agregar este usuario?","Confirmar","Cancelar");
    if (confirmar == true) {    
    const nombre = (document.querySelector('#nombre') as HTMLInputElement).value;
    const apellido = (document.querySelector('#apellido') as HTMLInputElement).value;
    const edad = (document.querySelector('#edad') as HTMLInputElement).value;
    const regionSeleccionadaId = this.regionSeleccionada;
    const comunaSeleccionadaId = this.comunaSeleccionada;

    let errorMessage = '';
  
    if (nombre.length < 2) {
      errorMessage += 'Ingrese un nombre válido.\n';
    }
  
    if (apellido.length < 3) {
      errorMessage += 'Ingrese un apellido válido.\n';
    }
  
    if (edad.length === 0 || isNaN(parseInt(edad, 10))) {
      errorMessage += 'Ingrese una edad válida.\n';
    }
  
    if (!this.regionSeleccionada) {
      errorMessage += 'Seleccione una region.\n';
    }

    if (!this.comunaSeleccionada) {
      errorMessage += 'Seleccione una comuna.\n';

    }

    if (errorMessage !== '') {
      await this.helper.showAlert(`Error:\n${errorMessage}`, "Error");
      return;
    }
    const regionSeleccionada = this.regiones.find(region => region.id === regionSeleccionadaId);
    const comunaSeleccionada = this.comunas.find(comuna => comuna.id === comunaSeleccionadaId);
    const nuevoUsuario: Usuario = {
      nombre,
      apellido,
      edad,
      region: regionSeleccionada ? regionSeleccionada.nombre : '', // Usar el nombre si se encuentra, de lo contrario cadena vacía
      comuna: comunaSeleccionada ? comunaSeleccionada.nombre : '', // Usar el nombre si se encuentra, de lo contrario cadena vacía
    };
  
    this.usuarios.push(nuevoUsuario);
  
    await Preferences.set({
      key: 'usuarios',
      value: JSON.stringify(this.usuarios),
    });
  
    await this.helper.showAlert("Usuario registrado correctamente", "Información");
    (document.querySelector('#nombre') as HTMLInputElement).value = '';
    (document.querySelector('#apellido') as HTMLInputElement).value = '';
    (document.querySelector('#edad') as HTMLInputElement).value = '';
    }

  /*   this.regionSeleccionado = null; // Reiniciar el valor de región seleccionada
    this.comunaSeleccionada = null; */
  
  }
  modal(){
    const parametros = { dataModal: this.usuarios };
    this.helper.showModal(InfoUsuarioPage, parametros, true);
  }



}
