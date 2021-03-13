import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//primeNg
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

//Propios
import { RegistroComponent } from './components/registro/registro.component';
import { ConsultaRegistradosComponent } from './components/consulta-registrados/consulta-registrados.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { OrdenarPipe } from './pipes/ordenar.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    ConsultaRegistradosComponent,
    SidemenuComponent,
    OrdenarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
