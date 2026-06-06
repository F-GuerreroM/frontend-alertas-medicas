import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  // Por defecto, al entrar veremos los pacientes
  vistaActual: string = 'pacientes'; 

  // Función que cambiará la pantalla al hacer clic en el menú
  cambiarVista(vista: string) {
    this.vistaActual = vista;
  }
}