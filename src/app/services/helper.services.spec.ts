import { TestBed } from '@angular/core/testing';

import { HelperService } from './helper.service';
import { AngularDelegate, ModalController } from '@ionic/angular';

describe('HelperService', () => {
  let service: HelperService;
  let modal: ModalController; 

  beforeEach(() => {
    TestBed.configureTestingModule ({
      providers:[HelperService,ModalController,AngularDelegate]
    });
    service = TestBed.inject(HelperService);
    modal = TestBed.inject(ModalController);
  });

  it('Probando el metodo de suma xde', () => {
    const num1 = 500;
    const num2 = 800;

    const resultado = service.sumar(num1,num2);

    expect(resultado).toBe(1300);

  }); 
}); 
