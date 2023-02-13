import { Component } from '@angular/core';
import { CreditosService } from '../services/creditos.service';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent {

  searchTerm: any = ""

  constructor(private _creditosService: CreditosService) {

  }

  credito: any = []

  buscarCreditos(id: any) {
    this._creditosService.getCreditos(id).subscribe(response => {
      this.credito = response
      console.log(this.credito)
    })
  }

}
