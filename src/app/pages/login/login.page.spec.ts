import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se deberia crear el componente del login', () => {
    expect(component).toBeTruthy();
  });
  
  it('Se deberia inicializar el componente con los campos vacios en los input', () => {
    expect(component.email).toBe('');
    expect(component.contrasena).toBe('');
  });
});
