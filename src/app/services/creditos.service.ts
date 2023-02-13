import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditosService {

  constructor(private http: HttpClient) { }

  getCreditos(id: any): Observable<any> {
    const baseURL = "http://api-cartera.eastus2.cloudapp.azure.com"
    const url = baseURL + "/api/Creditos?numeroCredito=" + id

    // http://api-cartera.eastus2.cloudapp.azure.com/api/Creditos?numeroCredito=CR1522

    return this.http.get(url)
  }
}
