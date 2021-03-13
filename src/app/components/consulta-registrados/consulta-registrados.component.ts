import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-consulta-registrados',
  templateUrl: './consulta-registrados.component.html',
  styles: [
  ]
})
export class ConsultaRegistradosComponent implements OnInit {

  constructor(private registroService: RegistroService) { }

  getRegistros() {
    this.registroService.getRegistros()
      .subscribe(resp => {
        console.log(resp);
      }, error => {
        console.log(error);
      });
  }

  ngOnInit(): void {
    this.getRegistros();
  }

}
