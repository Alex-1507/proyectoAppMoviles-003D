import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HelperService } from 'src/app/services/helper.service';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let helperService: HelperService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot(),        AngularFireModule.initializeApp(environment.firebaseConfig), // Ajusta según tu configuración
      AngularFireAuthModule,],  // Importa IonicModule y configúralo con forRoot    OJO QUE LOS DOS IMPORT DEBEN SER DE IONIC/ANGULAR
      providers: [ModalController],       // Proporciona ModalController como un proveedor
    });



    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería asegurarse de que los datos ingresados sean strings', () => {
    // Simular la entrada del usuario en los campos de correo y contraseña
    component.email = 'usuario@example.com';
    component.contrasena = 'contrasena123';

    // Verificar que los valores de los campos sean strings
    assertStringType(component.email, 'correo electrónico');
    assertStringType(component.contrasena, 'contraseña');
  });

  function assertStringType(value: any, fieldName: string): void {
    // Verificar que el valor sea un string
    expect(typeof value).toBe('string',' El campo ${fieldName} no es un string');
  }





  it('Mostrar alerta si email vacio', () => {
    spyOn(helperService, 'showAlert');
    component.email = '';
    component.login();
    expect(helperService.showAlert).toHaveBeenCalledWith('Debe ingresar un email.', 'Error');
  });

  it('Mostrar alerta si email vacio 2', () => {
    spyOn(helperService, 'showAlert');
    component.email = 'test@example.com';
    component.contrasena = '';
    component.login();
    expect(helperService.showAlert).toHaveBeenCalledWith('Debe ingresar una contraseña.', 'Error');
  });







});//-----

