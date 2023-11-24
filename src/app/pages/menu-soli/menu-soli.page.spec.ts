import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuSoliPage } from './menu-soli.page';

describe('MenuSoliPage', () => {
  let component: MenuSoliPage;
  let fixture: ComponentFixture<MenuSoliPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSoliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
