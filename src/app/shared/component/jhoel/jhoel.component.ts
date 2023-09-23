import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jhoel',
  templateUrl: './jhoel.component.html',
  styleUrls: ['./jhoel.component.css']
})
export class JhoelComponent {
@Input() text = '';
}
