import { Component } from '@angular/core';
interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`li{cursor:pointer;}`]
})
export class SidemenuComponent {
  menu: MenuItem[] = [
    { texto: 'Registro', ruta: './registro' },
    { texto: 'Consultas', ruta: './consulta' },
  ];

}
