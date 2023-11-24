import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HelperService } from './helper.service';
import { ModalController, AngularDelegate, ToastController } from '@ionic/angular';
import { of } from 'rxjs';

describe('HelperService', () => {
  let service: HelperService;
  let modalControllerSpy: jasmine.SpyObj<ModalController>;
  let toastController: ToastController;

  beforeEach(() => {
    modalControllerSpy = jasmine.createSpyObj('ModalController', ['create']);

    TestBed.configureTestingModule({
      providers: [
        HelperService,
        { provide: ModalController, useValue: modalControllerSpy, },
        AngularDelegate,
        ToastController
      ]
    });
    toastController = TestBed.inject(ToastController);
    service = TestBed.inject(HelperService);
  });

 
  

  it('Probando el método de suma', () => {
    const num1 = 500;
    const num2 = 800;

    const resultado = service.sumar(num1, num2);

    expect(resultado).toBe(1300);
  });


  it('Toast debe durar 9000ms', fakeAsync(async () => {
    const toastMessage = 'Prueba';
    const duration = 9000;

    spyOn(toastController, 'create').and.returnValue({
      present: jasmine.createSpy('present')
    } as any);

    await service.showToast(toastMessage, duration);

    
    tick(duration);

    expect(toastController.create).toHaveBeenCalledWith({
      cssClass: 'toastCss',
      position: 'bottom',
      color: 'dark',
      message: toastMessage,
      duration: duration
    });

   
    
  }));






});//fin spec


