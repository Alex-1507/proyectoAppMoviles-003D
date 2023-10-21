import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Informacion } from 'src/app/models/informacion';

@Component({
  selector: 'app-info-auto',
  templateUrl: './info-auto.page.html',
  styleUrls: ['./info-auto.page.scss'],
})
export class InfoAutoPage implements OnInit {

  @Input() dataModal:Informacion[]=[];

  constructor(private modalController:ModalController) { }

  ngOnInit() {
    console.log("Información modal", this.dataModal);

  }

  dismiss() {
    this.modalController.dismiss();
  }

}
