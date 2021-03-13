import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService implements AsyncValidator {
  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  constructor(private http: HttpClient) { }
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const correo = control.value;
    console.log(correo);
    return this.http.get<any[]>(`https://localhost:44368/api/registro/?correo=${correo}`).pipe(delay(2000), map(resp => {
      return (resp.length === 0) ? null : { emailTomado: true }
    })
    )
  }
}
