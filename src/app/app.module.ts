import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { InserisciArtistaComponent } from './inserisci-artista/inserisci-artista.component';
import { ComponentTitleComponent } from './component-title/component-title.component';
import { HttpClientModule } from '@angular/common/http';
import { VisualizzaArtistiComponent } from './visualizza-artisti/visualizza-artisti.component';
import { CercaArtistaComponent } from './cerca-artista/cerca-artista.component';
import { InserisciTracciaComponent } from './inserisci-traccia/inserisci-traccia.component';
import { VisualizzaTracciaComponent } from './visualizza-traccia/visualizza-traccia.component';
import { CercaTracciaComponent } from './cerca-traccia/cerca-traccia.component';
import { LoginComponent } from './login/login.component';
import { AccediComponent } from './accedi/accedi.component';
import { InserisciAlbumComponent } from './inserisci-album/inserisci-album.component';
import { VisualizzaAlbumComponent } from './visualizza-album/visualizza-album.component';
import { CercaAlbumComponent } from './cerca-album/cerca-album.component';
import { AboutComponent } from './about/about.component';
import { ContattiComponent } from './contatti/contatti.component';
import { DatabaseService } from './service/database.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InserisciArtistaComponent,
    ComponentTitleComponent,
    VisualizzaArtistiComponent,
    CercaArtistaComponent,
    InserisciTracciaComponent,
    VisualizzaTracciaComponent,
    CercaTracciaComponent,
    LoginComponent,
    AccediComponent,
    InserisciAlbumComponent,
    VisualizzaAlbumComponent,
    CercaAlbumComponent,
    AboutComponent,
    ContattiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
 
}

