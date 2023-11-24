import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginRegistroPage } from './login-registro.page';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

describe('LoginRegistroPage', () => {
  let component: LoginRegistroPage;
  let fixture: ComponentFixture<LoginRegistroPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginRegistroPage],
      imports: [IonicModule.forRoot(),        AngularFireModule.initializeApp(environment.firebaseConfig), 
      AngularFireAuthModule,HttpClientTestingModule],  //   OJO QUE LOS DOS IMPORT DEBEN SER DE IONIC/ANGULAR
    });



    fixture = TestBed.createComponent(LoginRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
