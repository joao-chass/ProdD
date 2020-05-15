import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserControlService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(`${environment.apiUrl}/register`);
  }
}
