import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { InfoAutoPage } from 'src/app/modals/info-auto/info-auto.page';
import { Informacion } from 'src/app/models/informacion';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-agregar-vehiculo',
  templateUrl: './agregar-vehiculo.page.html',
  styleUrls: ['./agregar-vehiculo.page.scss'],
})
export class AgregarVehiculoPage implements OnInit {
  vehiculos: Informacion[] = []; // array info autos

  constructor(
    private router:Router,
    private helper:HelperService,
    
    
  ) {
    this.loadVehiculos();
  }

  async loadVehiculos() {
    const vehiculosString = await Preferences.get({ key: 'vehiculos' });

    if (vehiculosString && vehiculosString.value) {
      this.vehiculos = JSON.parse(vehiculosString.value);
    }
  }

  ngOnInit() {
  }

  menuPrincipal(){
    this.router.navigateByUrl("menu");
  }
  async agregarVehiculo() {

    var confirmar = await this.helper.showConfirm("¿Desea agregar este vehiculo?","Confirmar","Cancelar");
    if (confirmar == true) {    
    const marca = (document.querySelector('#marca') as HTMLInputElement).value;
    const modelo = (document.querySelector('#modelo') as HTMLInputElement).value;
    const color = (document.querySelector('#color') as HTMLInputElement).value;
    const anio = (document.querySelector('#año') as HTMLInputElement).value;
    const patente = (document.querySelector('#patente') as HTMLInputElement).value;

    let errorMessage = '';

    if (marca.length < 2) {
      errorMessage += 'Ingrese una marca válida.\n'; 
    }
  
    if (modelo.length < 2) {
      errorMessage += 'Ingrese un modelo válido.\n';
    }
  
    if (color.length < 2) {
      errorMessage += 'Ingrese un color válido.\n';
    }
  
    if (anio.length !== 4 || isNaN(parseInt(anio, 10))) {
      errorMessage += 'Ingrese un año válido de 4 dígitos.\n';
    }
  
    if (patente.length < 2) {
      errorMessage += 'Ingrese una patente válida.\n';
    }
  
    if (errorMessage !== '') {
      await this.helper.showAlert(`Error:\n${errorMessage}`, "Error");
      return; 
    }

    const nuevoVehiculo: Informacion = {
      marca,
      modelo,
      color,
      anio,
      patente,
    };

    this.vehiculos.push(nuevoVehiculo);

    await Preferences.set({
      key: 'vehiculos',
      value: JSON.stringify(this.vehiculos),
    });

    await this.helper.showAlert("Vehículo registrado correctamente", "Información")
  }

  }


  modal(){
    const parametros = { dataModal: this.vehiculos };
    this.helper.showModal(InfoAutoPage, parametros, true);
  }



}//fin ts ----------------------------------------

