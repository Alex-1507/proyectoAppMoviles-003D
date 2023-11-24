import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Informacion } from 'src/app/models/informacion';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-perfil-modal',
  templateUrl: './perfil-modal.page.html',
  styleUrls: ['./perfil-modal.page.scss'],
})
export class PerfilModalPage implements OnInit {

  @Input() dataModal:Informacion[]=[];

  constructor(
    private modalController:ModalController,
    private router:Router,
    private storage:StorageService,
    private auth:AngularFireAuth) { }

  ngOnInit() {
    
    
  }
  close(){
    this.modalController.dismiss();
  }
}
