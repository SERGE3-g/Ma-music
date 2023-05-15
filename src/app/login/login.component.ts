import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from '../service/register.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  titoloParent = "Inserisci i dati per registrarti";
  register=[ 'id', 'nome','cognome','sesso','datadinascita','codicefiscale','citta','indirizzo','cap','telefono','email','username','password','confermapassword','attivo'];
  sesso = ['Maschio', 'Femmina'];


  // Reactive Form
  registerForm = new FormGroup({
    idForm : new FormControl(''),
    nomeForm: new FormControl(''),
    cognomeForm: new FormControl(''),
    sessoForm: new FormControl(''),
    datadinascitaForm: new FormControl(''),
    codicefiscaleForm: new FormControl(''),
    cittaForm: new FormControl(''),
    indirizzoForm: new FormControl(''),
    capForm: new FormControl(''),
    telefonoForm: new FormControl(''),
    emailForm: new FormControl(''),
    usernameForm: new FormControl(''),
    passwordForm: new FormControl(''),
    confermapasswordForm: new FormControl(''),
    attivoForm: new FormControl(''),
  });

  content=" Complimenti Sei stato registrato con successo";
  registerInserito: any = null;

  constructor(private registerSvc: RegisterService , private modaleSvc:NgbModal) {}



  inviaDati(modal: any) {
    const datiRegister = this.registerForm.value;

    const register = {
      id: Number(datiRegister.idForm!),
      nome: datiRegister.nomeForm!,
      cognome: datiRegister.cognomeForm!,
      datadinascita: datiRegister.datadinascitaForm!,
      sesso: datiRegister.sessoForm!,
      codicefiscale: datiRegister.codicefiscaleForm!,
      citta: datiRegister.cittaForm!,
      indirizzo: datiRegister.indirizzoForm!,
      cap: datiRegister.capForm!,
      telefono: Number(datiRegister.telefonoForm!),
      email: datiRegister.emailForm!,
      username: datiRegister.usernameForm!,
      password: datiRegister.passwordForm!,
      confermapassword: datiRegister.confermapasswordForm!,
      attivo: datiRegister.attivoForm!,
    };

    // this.registerSvc.save(register).subscribe({
    //   next: (response) => {
    //     this.registerInserito = response;
    //     this.modaleSvc.open(modal);
    //   }
    // })
    console.log(register);
  }



}

