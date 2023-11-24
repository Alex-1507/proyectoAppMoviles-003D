import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoUsuarioPage } from './info-usuario.page';
import { IonicModule, ModalController } from '@ionic/angular';


describe('InfoUsuarioPage', () => {
  let component: InfoUsuarioPage;
  let fixture: ComponentFixture<InfoUsuarioPage>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoUsuarioPage],
      imports: [IonicModule.forRoot()],  // Importa IonicModule y configúralo con forRoot    OJO QUE LOS DOS IMPORT DEBEN SER DE IONIC/ANGULAR
      providers: [ModalController],       // Proporciona ModalController como un proveedor
    });

    fixture = TestBed.createComponent(InfoUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
