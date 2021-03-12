import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ConsultaRegistradosComponent } from './components/consulta-registrados/consulta-registrados.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    ConsultaRegistradosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
