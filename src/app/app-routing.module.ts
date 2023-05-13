import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InserisciArtistaComponent } from './inserisci-artista/inserisci-artista.component';
import { VisualizzaArtistiComponent } from './visualizza-artisti/visualizza-artisti.component';
import { CercaArtistaComponent } from './cerca-artista/cerca-artista.component';
import { InserisciAlbumComponent } from './inserisci-album/inserisci-album.component';
import { VisualizzaAlbumComponent } from './visualizza-album/visualizza-album.component';
import { CercaAlbumComponent } from './cerca-album/cerca-album.component';
import { InserisciTracciaComponent } from './inserisci-traccia/inserisci-traccia.component';
import { CercaTracciaComponent } from './cerca-traccia/cerca-traccia.component';
import { VisualizzaTracciaComponent } from './visualizza-traccia/visualizza-traccia.component';
import { AboutComponent } from './about/about.component';
import { ContattiComponent } from './contatti/contatti.component';
import { AccediComponent } from './accedi/accedi.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path:'about',component:AboutComponent},
  {path: 'contatti', component: ContattiComponent},
  {path:'accedi',component:AccediComponent},
  {path: 'inserisci-artista', component: InserisciArtistaComponent },
  {path: 'visualizza-artisti', component: VisualizzaArtistiComponent },
  {path: 'cerca-artista', component: CercaArtistaComponent },
  {path: 'inserisci-album',component:InserisciAlbumComponent},
  {path: 'viauslizza-album',component:VisualizzaAlbumComponent},
  {path: 'cerca-album',component:CercaAlbumComponent},
  {path:'inserisci-traccia',component:InserisciTracciaComponent},
  {path:'cerca-traccia',component:CercaTracciaComponent},
  {path:'visualizza-tracce',component:VisualizzaTracciaComponent},
  {path:'login',component:LoginComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
