import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilPage } from './perfil.page';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

describe('PerfilPage', () => {
  let component: PerfilPage;
  let fixture: ComponentFixture<PerfilPage>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [PerfilPage],
      imports: [IonicModule.forRoot(),        AngularFireModule.initializeApp(environment.firebaseConfig), 
      AngularFireAuthModule,], //  OJO QUE LOS DOS IMPORT DEBEN SER DE IONIC/ANGULAR
    });

    fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
