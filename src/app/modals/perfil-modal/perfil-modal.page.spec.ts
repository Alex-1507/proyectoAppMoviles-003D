import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PerfilModalPage } from './perfil-modal.page';

describe('PerfilModalPage', () => {
  let component: PerfilModalPage;
  let fixture: ComponentFixture<PerfilModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
