import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaRegistradosComponent } from './components/consulta-registrados/consulta-registrados.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  { path: '', component: RegistroComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'consulta', component: ConsultaRegistradosComponent },
  { path: '**', redirectTo: 'registro' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
