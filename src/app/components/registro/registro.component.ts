import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from 'src/app/services/registro.service';
import { ValidatorService } from 'src/app/services/validator.service';
import { Registro } from '../../interfaces/registro.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
  tipoSeleccionado: any = null;
  tipoDocumento: any[] = [
    'Cédula de Ciudadanía',
    'Cédula de Extranjería',
    'Tarjeta de Identidad',
    'Pasaporte',
  ];
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    correo: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    tipoDocumento: ['', [Validators.required]],
    documento: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
  })
  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('correo')?.errors;
    if (errors?.required) {
      return 'El correo es obligatorio';
    } else if (errors?.pattern) {
      return 'El valor ingresado no tiene formato de correo';
    } else if (errors?.emailTomado) {
      return 'El correo ya está resgistrado';
    }
    return ''
  }

  constructor(private fb: FormBuilder, private validatorService: ValidatorService, private registroService: RegistroService) { }
  ngOnInit(): void {
  }
  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }
  submitFormulario() {
    const registro: Registro = {
      nombre: this.miFormulario.get('nombre')?.value,
      correo: this.miFormulario.get('correo')?.value,
      tipoDocumento: this.miFormulario.get('tipoDocumento')?.value,
      documento: this.miFormulario.get('documento')?.value,
      telefono: this.miFormulario.get('telefono')?.value,
    }
    this.registroService.setRegistro(registro).subscribe(data => {
      // console.log(data);
      this.miFormulario.reset();
    }, error => {
      console.log(error);
    });

  }


}
