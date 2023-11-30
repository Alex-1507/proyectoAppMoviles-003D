import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-menu-soli-confirmacion',
  templateUrl: './menu-soli-confirmacion.page.html',
  styleUrls: ['./menu-soli-confirmacion.page.scss'],
})
export class MenuSoliConfirmacionPage implements OnInit {
  public alertButtons = ['OK']; 
  constructor(
    private router:Router,
    private helper:HelperService
  ) { }

  ngOnInit() {
  }

volverMenuSoli(){
    this.router.navigateByUrl("menu-soli");
  
}

  async cargarMenuSoliConfirm(){
  var confirmar = await this.helper.showConfirm("¿Desea confirmar pago?","Confirmar","Cancelar");
  if (confirmar == true) { 
  this.router.navigateByUrl("menu")
}if(confirmar == false){
  this.router.navigateByUrl("menu-soli-confirmacion")
}
}


}