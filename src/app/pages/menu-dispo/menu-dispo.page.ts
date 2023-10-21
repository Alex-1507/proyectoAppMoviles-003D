import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-dispo',
  templateUrl: './menu-dispo.page.html',
  styleUrls: ['./menu-dispo.page.scss'],
})
export class MenuDispoPage implements OnInit {


  origen:string = "";
  destino:string = "";
  costo:number =0;
  pasajeros:number =0;

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
  }

  menuPrincipal(){
    this.router.navigateByUrl("menu")
  }

  calcularCosto() {
    // Aquí puedes realizar cálculos basados en la selección del destino
    if (this.destino === 'opcionA') {
      this.costo = 65000; // Establece el costo según la opción A
    } else if (this.destino === 'opcionB') {
      this.costo = 45000; // Establece el costo según la opción B
    } 
    else if (this.destino === 'opcionC') {
      this.costo = 125000; // Establece el costo según la opción B
    } else {
      this.costo = 0; // Costo por defecto si no se selecciona ninguna opción
    }
  }


}
