import { Component } from '@angular/core';
import { DatabaseService } from './service/database.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor() {
  console.log(environment.api_url);
}


  title = 'Web Music';

  /* constructor(private databaseService: DatabaseService) {}

  ngOnInit() {
   this.databaseService.connect().then(() => {
      this.databaseService.query('SELECT * FROM  accedi').then(results => {
        console.log(results);
      });
    });*/
  }


