import { Component } from '@angular/core';
import { CreditosService } from './services/creditos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _creditosService: CreditosService) { }
  
  title = 'routing-app';
}
