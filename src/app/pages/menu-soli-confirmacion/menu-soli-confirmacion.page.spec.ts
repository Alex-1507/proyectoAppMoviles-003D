import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuSoliConfirmacionPage } from './menu-soli-confirmacion.page';

describe('MenuSoliConfirmacionPage', () => {
  let component: MenuSoliConfirmacionPage;
  let fixture: ComponentFixture<MenuSoliConfirmacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuSoliConfirmacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
