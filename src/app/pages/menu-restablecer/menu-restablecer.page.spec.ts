import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuRestablecerPage } from './menu-restablecer.page';

describe('MenuRestablecerPage', () => {
  let component: MenuRestablecerPage;
  let fixture: ComponentFixture<MenuRestablecerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRestablecerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
