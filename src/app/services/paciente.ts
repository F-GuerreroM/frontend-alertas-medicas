import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente'; // Ruta hacia tu interfaz

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  // Reemplaza esto con tu URL real de Azure
  private apiUrl = 'https://apim-alertas-hospital-fg.azure-api.net/pacientes'; 

  constructor(private http: HttpClient) {}

  getPacientes(): Observable<Paciente[]> {
    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': 'e1e1d60ca85e4bcbbe0b27d22353adbb'
    });

    return this.http.get<Paciente[]>(this.apiUrl, { headers });
  }
}