import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularDelegate } from '@ionic/angular';
import { environment } from 'src/environments/environment';  

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService, AngularDelegate],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig), 
        AngularFireAuthModule,
      ],
    });
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  }); 
});
