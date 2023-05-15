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
  nazioni = ['Regno Unito', 'Italia', 'Germania', 'USA', 'Francia', 'Spagna','costa D\'Avorio',
   'Svizzera', 'Svezia', 'Norvegia', 'Danimarca', 'Finlandia', 'Polonia', 'Russia', 'Ucraina',
    'Romania', 'Bulgaria', 'Grecia', 'Turchia', 'Israele', 'Giappone', 'Cina', 'Corea del Sud',
    'India', 'Australia', 'Nuova Zelanda', 'Brasile', 'Argentina', 'Cile', 'Perù', 'Colombia',
    'Messico', 'Canada', 'Cuba', 'Egitto', 'Sudafrica', 'Marocco', 'Algeria', 'Tunisia', 'Libia',
    'Nigeria', 'Senegal', 'Kenya', 'Etiopia', 'Ghana', 'Camerun', 'Angola', 'Mozambico', 'Zimbabwe',
    'Zambia', 'Madagascar', 'Tanzania', 'Uganda', 'Mali', 'Burkina Faso', 'Niger', 'Ciad', 'Congo',
    'Gabon', 'Guinea', 'Guinea Bissau', 'Guinea Equatoriale','Sierra Leone', 'Liberia', 'Benin', 'Togo',
    'Burundi', 'Ruanda', 'Somalia', 'Eritrea', 'Sudan', 'Sudan del Sud', 'Congo', 'Repubblica Centrafricana',
    'Repubblica Democratica del Congo', 'Repubblica Dominicana', 'Repubblica Ceca', 'Slovacchia', 'Ungheria',
    'Austria', 'Belgio', 'Olanda', 'Portogallo', 'Irlanda', 'Islanda', 'Gibilterra', 'Malta', 'Cipro', 'Lussemburgo',
    'Liechtenstein', 'Monaco', 'San Marino', 'Vaticano', 'Andorra', 'Slovenia', 'Croazia', 'Bosnia ed Erzegovina', 'Serbia',
    'Montenegro', 'Albania', 'Macedonia del Nord', 'Kosovo', 'Moldavia', 'Bielorussia', 'Lettonia', 'Lituania'];

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
