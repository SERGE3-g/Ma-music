import { Component } from '@angular/core';
import { ArtistService } from '../service/artist.service';
import { Artista } from '../model/artista';

@Component({
  selector: 'app-cerca-artista',
  templateUrl: './cerca-artista.component.html',
  styleUrls: ['./cerca-artista.component.css'],
})
export class CercaArtistaComponent {
  artistaId: string = '';

  constructor(private artistSvc: ArtistService) {}

  cercaArtista(): void {
    this.artistSvc.findById(Number(this.artistaId)).subscribe({
      next: (response: Artista) => {
        console.log(response);
      },
      error: (err) => alert(err.message),
    });
  }
}
