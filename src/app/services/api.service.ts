import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginFormInterface } from '../shared/models/login-form.interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl: string = 'https://abx.com/api/v1';

  constructor(private httpClient: HttpClient) {}

  /**
   *
   * @param data
   * @returns
   */
  loginUser(data: LoginFormInterface): Observable<{ token: string }> {
    return this.httpClient.post<{ token: string }>(
      `${this.baseUrl}/login`,
      data
    );
  }
}
