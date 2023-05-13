import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Artista } from '../model/artista';
import { ArtistService } from '../service/artist.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inserisci-artista',
  templateUrl: './inserisci-artista.component.html',
  styleUrls: ['./inserisci-artista.component.css'],
})
export class InserisciArtistaComponent {
  titoloParent = "Inserisci i dati dell'Artista";
  nazioni = ['Regno Unito', 'Italia', 'Germania', 'USA'];

  // Reactive Form
  artistaForm = new FormGroup({
    nomeForm: new FormControl(''),
    annoInizioForm: new FormControl(''),
    nazioneForm: new FormControl(''),
    gruppoForm: new FormControl(''),
  });

  artistaInserito: any = null;

  constructor(private artistaSvc: ArtistService, private modalSvc: NgbModal) {}

  inviaDati(modal: any) {
    const datiArtista = this.artistaForm.value;

    const artista: Artista = {
      nome: datiArtista.nomeForm!,
      nazione: datiArtista.nazioneForm!,
      annoInizio: Number(datiArtista.annoInizioForm!),
      gruppo: Boolean(datiArtista.gruppoForm!),
    };

    this.artistaSvc.save(artista).subscribe({
      next: (response) => {
        this.artistaInserito = response;
        this.modalSvc.open(modal);
      },
      error: (err) => alert(err.message)
    });
  }
}
