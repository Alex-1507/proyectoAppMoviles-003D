import { TestBed } from '@angular/core/testing';

import { HelperService } from './helper.service';

describe('HelperService', () => {
  let service: HelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HelperService]
    });
    service = TestBed.inject(HelperService);
  });

  it('Probando el metodo de suma xde', () => {
    const num1 = 500;
    const num2 = 800;

    const resultado = service.sumar(num1,num2);

    expect(resultado).toBe(1300);

  }); 
});
