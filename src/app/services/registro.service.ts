import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private baseUrl = "https://localhost:44368/";
  private apiUrl = "api/registro/"
  constructor(private http: HttpClient) { }
  getRegistros(): Observable<any> {
    return this.http.get(this.baseUrl + this.baseUrl);
  }

}
