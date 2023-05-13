import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Login } from '../model/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


 readonly url: string = 'http://localhost:3000/login';

  constructor(private http:HttpClient) { }

save(login:Login):Observable<Login>{
  return this.http.post<Login>(this.url,login);
}

findById(loginId:number):Observable<Login>{
  return this.http.get<Login>(`${this.url}/${loginId}`);

}

findAll ():Observable<Array<Login>>{
  return this.http.get<Array<Login>>(this.url);
}


}
