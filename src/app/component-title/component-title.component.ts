import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-title',
  templateUrl: './component-title.component.html',
  styleUrls: ['./component-title.component.css'],
})
export class ComponentTitleComponent {
  @Input() titoloChild = '';
}
