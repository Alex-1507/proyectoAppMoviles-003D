import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuDispoPage } from './menu-dispo.page';

describe('MenuDispoPage', () => {
  let component: MenuDispoPage;
  let fixture: ComponentFixture<MenuDispoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuDispoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
