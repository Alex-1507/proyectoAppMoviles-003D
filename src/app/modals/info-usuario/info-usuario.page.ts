import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.page.html',
  styleUrls: ['./info-usuario.page.scss'],
})
export class InfoUsuarioPage implements OnInit {

  @Input() dataModal:Usuario[]=[];


  constructor(
    private modalController:ModalController
  ) { }

  ngOnInit() {
    console.log("Información modal", this.dataModal);

  }

  dismiss() {
    this.modalController.dismiss();
  }


}
