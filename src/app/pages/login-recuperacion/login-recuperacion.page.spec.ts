import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginRecuperacionPage } from './login-recuperacion.page';

describe('LoginRecuperacionPage', () => {
  let component: LoginRecuperacionPage;
  let fixture: ComponentFixture<LoginRecuperacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginRecuperacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
