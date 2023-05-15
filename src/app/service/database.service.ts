import { Injectable } from '@angular/core';
import * as mysql from 'mysql';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  connection: mysql.Connection;

  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      database: 'mamusic',
      user: 'root',
      password: '3892978507Gs'
    });
  }

  connect() {
    this.connection.connect(err => {
      if (err) {
        console.log(err);
      } else {
        console.log('Connected to database');
      }
    });
  }

  disconnect() {
    this.connection.end();
  }

  query(sql: string | mysql.QueryOptions, values: any) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, values, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

}
