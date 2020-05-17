import { environment } from './../../environments/environment.prod';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserControlService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(`${environment.apiUrl}/register`);
  }

  getUser(id): Observable<any>{
    return this.http.get(`${environment.apiUrl}/register/${id}`);
  }

  editUser(id , user: User): Observable<any>{
    const params = user;
    return this.http.patch(`${environment.apiUrl}/register/${id}`, params);
  }
}
