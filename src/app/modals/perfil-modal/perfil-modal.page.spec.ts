import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PerfilModalPage } from './perfil-modal.page';
import { IonicModule, ModalController } from '@ionic/angular';

describe('PerfilModalPage', () => {
  let component: PerfilModalPage;
  let fixture: ComponentFixture<PerfilModalPage>;


  beforeEach(() => {
    
    TestBed.configureTestingModule({
      declarations: [PerfilModalPage],
      imports: [IonicModule.forRoot()],  // Importa IonicModule y configúralo con forRoot    OJO QUE LOS DOS IMPORT DEBEN SER DE IONIC/ANGULAR
      providers: [ModalController],       // Proporciona ModalController como un proveedor
    });

    fixture = TestBed.createComponent(PerfilModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /*    it('should create', () => {
    expect(component).toBeTruthy();
  });  */
});
