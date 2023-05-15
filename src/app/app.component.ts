import { Component } from '@angular/core';
import { DatabaseService } from './service/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web Music';

  constructor(private databaseService: DatabaseService) {}

  ngOnInit() {
   /* this.databaseService.connect().then(() => {
      this.databaseService.query('SELECT * FROM  accedi').then(results => {
        console.log(results);
      });
    });*/
  }

}
