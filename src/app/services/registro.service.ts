import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registro } from '../interfaces/registro.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  baseUrl = "https://localhost:44368/";
  apiUrl = "api/registro/"
  constructor(private http: HttpClient) { }
  getRegistros(): Observable<any> {
    return this.http.get(this.baseUrl + this.baseUrl);
  }

}
