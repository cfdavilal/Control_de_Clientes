import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TableroComponent } from './components/tablero/tablero.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, SETTINGS } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';
import { ClienteServicio } from './servicios/cliente.service';
import { LoginService } from './servicios/login.service';
import { AuthGuard } from './guardianes/auth.guard';
import { ConfiguracionService } from './servicios/configuracion.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableroComponent,
    ClientesComponent,
    EditarClienteComponent,
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    NotFoundComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore, 'control-clientes'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot(),
    FormsModule,
  ],
  providers: [ClienteServicio,
              LoginService,
              AuthGuard,
              ConfiguracionService,
              { provide: SETTINGS, useValue:{} }],
  bootstrap: [AppComponent],
})
export class AppModule {}
