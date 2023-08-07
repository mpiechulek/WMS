import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);    
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a POST request to log the user', () => {
    const postData = { email: 'abc@123.com', password: '1234' };

    service.loginUser(postData).subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne('https://abx.com/api/v1/login');

    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(postData);

    req.flush({ token: 'qweqwdfr3e11' });
  });

  it('should make a POST request het an error', () => {
    const postData = { email: 'abc@123.com', password: '1234' };
    const mockErrorResponse = {
      status: 400,
      statusText: 'Bad Request',
    };

    service.loginUser(postData).subscribe(
      () => {
        // This block should not be executed in case of an error
        fail('Expected an error, but got a success response');
      },
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(mockErrorResponse.status);
        expect(error.statusText).toEqual(mockErrorResponse.statusText);
      }
    );

    const req = httpMock.expectOne('https://abx.com/api/v1/login');

    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(postData);
    req.flush(null, mockErrorResponse);
  });
});
