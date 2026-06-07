export interface Paciente {
  idPaciente?: number;     // Cambiado de 'id' a 'idPaciente' para coincidir con tu Long de Java
  rut: string;
  nombreCompleto: string;  // Cambiado de 'nombre' a 'nombreCompleto'
  edad: number;
  diagnostico: string;     // Nuevo campo obligatorio
  estado: string;          // En Java es "Crítico" por defecto
  fechaIngreso?: string;   // LocalDateTime viaja por JSON como un string ISO 8601 (ej: "2026-06-06T15:30:00")
}