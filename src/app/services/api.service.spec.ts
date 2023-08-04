import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a POST request to log the user', () => {
    const postData = { email: 'abc@123.com', password: '1234' };
  
    service.loginUser(postData).subscribe(response => {
      expect(response).toBeTruthy();
    });
  
    const req = httpMock.expectOne('https://abx.com/api/v1/login');
  
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(postData);
  
    req.flush({ token: 'qweqwdfr3e11' });
  });
});
