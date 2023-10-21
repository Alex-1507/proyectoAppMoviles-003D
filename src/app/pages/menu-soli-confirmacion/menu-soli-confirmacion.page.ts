import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-soli-confirmacion',
  templateUrl: './menu-soli-confirmacion.page.html',
  styleUrls: ['./menu-soli-confirmacion.page.scss'],
})
export class MenuSoliConfirmacionPage implements OnInit {
  public alertButtons = ['OK']; 
  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
  }

volverMenuSoli(){
    this.router.navigateByUrl("menu-soli");
  
}

cargarMenuSoliConfirm(){
  this.router.navigateByUrl("menu-soli-confirmacion")
}
}
