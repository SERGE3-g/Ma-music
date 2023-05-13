import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../model/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  readonly url: string = 'http://localhost:3000/register';

  constructor(private http: HttpClient) {}

  save(register: Register): Observable<Register> {
    return this.http.post<Register>(this.url, register);
  }

  findById(registerId: number): Observable<Register> {
    return this.http.get<Register>(`${this.url}/${registerId}`);
  }

  findAll(): Observable<Array<Register>> {
    return this.http.get<Array<Register>>(this.url);
  }

}
