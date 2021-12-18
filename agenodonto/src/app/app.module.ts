import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTPStatus, LoaderInterceptor } from './guard/interceptor/loader.interceptor';
import { PaginaPrincipalDentistaModule } from './pages/pagina-principal-dentista/pagina-principal-dentista.module';
import { PaginaPrincipalPacienteModule } from './pages/pagina-principal-paciente/pagina-principal-paciente.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './guard/auth-guard.service';
import { LocalDateTimePipe } from './shared/pipe/local-date-time.pipe';

registerLocaleData(localePT);

const RxJS = [LoaderInterceptor, HTTPStatus];

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    PaginaPrincipalDentistaModule,
    PaginaPrincipalPacienteModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthGuard,
    RxJS,
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    { provide: LOCALE_ID, useValue: 'pt-br' },
    LocalDateTimePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
