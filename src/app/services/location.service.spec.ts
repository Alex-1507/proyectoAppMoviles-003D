import { TestBed } from '@angular/core/testing';

import { LocationService } from './location.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularDelegate } from '@ionic/angular';

describe('LocationService', () => {
  let service: LocationService;
  let http:HttpClientTestingModule

  beforeEach(() => {
    TestBed.configureTestingModule({
      //los providers 
      providers: [LocationService, AngularDelegate],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(LocationService);
    http = TestBed.inject(HttpClientTestingModule);
  });

  it('should be created', () => {
    expect()
  });
});
