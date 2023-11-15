import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { Informacion } from 'src/app/models/informacion';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-menu-soli',
  templateUrl: './menu-soli.page.html',
  styleUrls: ['./menu-soli.page.scss'],
})
export class MenuSoliPage implements OnInit {
  public alertButtons = ['OK']; 
  
  origen:string = "";
  destino:string = "";
  costo:number =0;
  vehiculos: Informacion[] = [];
  constructor(
    private router:Router,
    private helper:HelperService
    ) {
      this.loadVehiculos();
    }

  ngOnInit() {
  }

  menuSoliConfirm(){
    this.router.navigateByUrl("menu-soli-confirmacion")
  }
  async loadVehiculos() {
    const vehiculosString = await Preferences.get({ key: 'vehiculos' });

    if (vehiculosString && vehiculosString.value) {
      this.vehiculos = JSON.parse(vehiculosString.value);
    }
  }

 async solicitar(){
  //
  var confirmar = await this.helper.showConfirm("Presione confirmar para ir al portal de pagos.","Confirmar","Cancelar");
  if (confirmar == true) {
    this.router.navigateByUrl("menu-soli-confirmacion");
  }
}
  


  menuPrincipal(){
    this.router.navigateByUrl("menu");
  }


  calcularCosto() {
    // Aquí puedes realizar cálculos basados en la selección del destino
    if (this.destino === 'opcionA') {
      this.costo = 85000; // Establece el costo según la opción A
    } else if (this.destino === 'opcionB') {
      this.costo = 75000; // Establece el costo según la opción B
    } 
    else if (this.destino === 'opcionC') {
      this.costo = 135000; // Establece el costo según la opción B
    } else {
      this.costo = 0; // Costo por defecto si no se selecciona ninguna opción
    }
  }

}
