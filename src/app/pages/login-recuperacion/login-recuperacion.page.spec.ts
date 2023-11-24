import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginRecuperacionPage } from './login-recuperacion.page';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


describe('LoginRecuperacionPage', () => {
  let component: LoginRecuperacionPage;
  let fixture: ComponentFixture<LoginRecuperacionPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginRecuperacionPage],
      imports: [IonicModule.forRoot(),        AngularFireModule.initializeApp(environment.firebaseConfig), 
      AngularFireAuthModule,],  //  OJO QUE LOS DOS IMPORT DEBEN SER DE IONIC/ANGULAR
      providers: [ModalController],      
    });


    fixture = TestBed.createComponent(LoginRecuperacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
