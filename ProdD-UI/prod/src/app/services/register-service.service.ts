import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../models/register-model';


@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http: HttpClient) { }

  registeUser(userData: Register): Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/register`, userData)
  }
}
