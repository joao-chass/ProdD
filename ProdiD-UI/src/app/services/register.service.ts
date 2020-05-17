import { environment } from './../../environments/environment.prod';

import { Observable } from 'rxjs';
import { Register } from './../models/register-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registeUser(userData: Register): Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/register`, userData)
  }
}
