import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPage } from './menu.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

describe('MenuPage', () => {
  let component: MenuPage;
  let fixture: ComponentFixture<MenuPage>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [MenuPage],
      imports: [IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebaseConfig), 
      AngularFireAuthModule,],  //   OJO QUE LOS DOS IMPORT DEBEN SER DE IONIC/ANGULAR
      providers: [ModalController],       // proporciona ModalController como un proveedor
    });

    fixture = TestBed.createComponent(MenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
