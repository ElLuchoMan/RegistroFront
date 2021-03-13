import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registro } from '../interfaces/registro.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private baseUrl = "https://localhost:44368/";
  private apiUrl = "api/registro/"
  constructor(private http: HttpClient) { }
  getListaRegistros(): Observable<any> {
    return this.http.get(this.baseUrl + this.apiUrl);
  }
  setComentario(registro: Registro): Observable<any> {
    return this.http.post(this.baseUrl + this.apiUrl, registro);
  }

}
