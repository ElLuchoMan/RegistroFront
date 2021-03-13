import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro.service';
import { Registro } from '../../interfaces/registro.interface';

@Component({
  selector: 'app-consulta-registrados',
  templateUrl: './consulta-registrados.component.html',
  styles: [
  ]
})
export class ConsultaRegistradosComponent implements OnInit {
  ordenarPor: string = 'sin valor';
  listaRegistros: Registro[] = [];
  constructor(private registroService: RegistroService) { }

  getRegistro() {
    this.registroService.getListaRegistros().subscribe((resp) => {
      // console.log(resp);
      this.listaRegistros = resp;
    });
  }

  ngOnInit(): void {
    this.getRegistro();

  }
  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }

}
