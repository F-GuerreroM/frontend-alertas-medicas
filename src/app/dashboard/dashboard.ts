import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngIf y *ngFor
import { PacienteService } from '../services/paciente';
import { Paciente } from '../models/paciente';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {
  vistaActual = 'pacientes';
  pacientes: Paciente[] = [];

  constructor(private pacienteService: PacienteService) {}

  ngOnInit() {
    this.cargarPacientes();
  }

  cargarPacientes() {
    this.pacienteService.getPacientes().subscribe({
      next: (data) => {
        this.pacientes = data;
      },
      error: (err) => {
        console.error('Error al conectar con Azure:', err);
      }
    });
  }

  cambiarVista(vista: string) {
    this.vistaActual = vista;
  }
}