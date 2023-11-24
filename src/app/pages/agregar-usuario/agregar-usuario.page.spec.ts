import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarUsuarioPage } from './agregar-usuario.page';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

describe('AgregarUsuarioPage', () => {
  let component: AgregarUsuarioPage;
  let fixture: ComponentFixture<AgregarUsuarioPage>;

  beforeEach(() => {
    const activatedRouteStub = {
      snapshot: {
        params: {
          calificacion: 123,  // proporciona un valor simulado para 'calificacion'
        },
      },
      paramMap: new BehaviorSubject({}),
    };
    TestBed.configureTestingModule({
      declarations: [AgregarUsuarioPage],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
      ],
    });

    fixture = TestBed.createComponent(AgregarUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
