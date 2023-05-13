import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../service/artist.service';
import { Artista } from '../model/artista';

@Component({
  selector: 'app-visualizza-artisti',
  templateUrl: './visualizza-artisti.component.html',
  styleUrls: ['./visualizza-artisti.component.css'],
})
export class VisualizzaArtistiComponent implements OnInit {
  artisti: Array<Artista> | null = null;

  constructor(private artistaSvc: ArtistService) {}

  ngOnInit(): void {
    this.artistaSvc.findAll().subscribe({
      next: (response: Array<Artista>) => {
        this.artisti = response;
      },
      error: (err) => alert(err.message),
    });
  }
}
