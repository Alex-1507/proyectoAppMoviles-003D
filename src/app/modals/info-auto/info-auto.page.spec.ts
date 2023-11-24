import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoAutoPage } from './info-auto.page';
import { IonicModule, ModalController } from '@ionic/angular';


describe('InfoAutoPage', () => {
  let component: InfoAutoPage;
  let fixture: ComponentFixture<InfoAutoPage>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [InfoAutoPage],
      imports: [IonicModule.forRoot()],  // Importa IonicModule y configúralo con forRoot    OJO QUE LOS DOS IMPORT DEBEN SER DE IONIC/ANGULAR
      providers: [ModalController],       // Proporciona ModalController como un proveedor
    });



    fixture = TestBed.createComponent(InfoAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create', () => {
    expect(component).toBeTruthy();
  }); 


  
});
