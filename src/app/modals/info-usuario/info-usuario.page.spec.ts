import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoUsuarioPage } from './info-usuario.page';

describe('InfoUsuarioPage', () => {
  let component: InfoUsuarioPage;
  let fixture: ComponentFixture<InfoUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
