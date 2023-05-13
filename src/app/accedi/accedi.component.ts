import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup,} from '@angular/forms';
import { LoginService } from '../service/login.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accedi',
  templateUrl: './accedi.component.html',
  styleUrls: ['./accedi.component.css']
})
export class AccediComponent implements OnInit {

  accedi=['email', 'username','password'];

  accediForm= new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });


  content="Sei stato registrato con successo";
  loginInserito: any = null;

  constructor(private loginSvc:LoginService , private modaleSvc:NgbModal) {}

  ngOnInit(): void {
  }

  inviaDati(modal: any) {
    const datiLogin = this.accediForm.value;

    const login = {
      email: datiLogin.email!,
      username: datiLogin.username!,
      password: datiLogin.password!,
    };

    this.loginSvc.save(login).subscribe({
      next: (response) => {
        this.loginInserito = response;
        this.modaleSvc.open(modal);
      }
    });
    console.log(login);
      
  }

}
