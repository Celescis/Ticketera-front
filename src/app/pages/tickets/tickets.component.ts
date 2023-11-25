import { Component } from '@angular/core';
import { TicketsService } from 'src/app/services/tickets.service';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {
  infoSeleccionada = '';
  estructuraConsulta: any;
  mostrarEstructura = false;
  tickets: any[] = [];

  constructor(private ticketService: TicketsService) { }

  //TICKET ESTRUCTURA
  mostrarEstructuraConsulta(): void {
    this.mostrarEstructura = true;
    this.estructuraConsulta = {
      cliente: {
        nombre: "",
        apellido: "",
        contacto: {
          email: "",
          telefonos: []
        },
        localidad: {
          codigoPostal: 0,
          descripcion: ""
        },
        ubicacion: {
          geolocalizacion: {
            type: "Point",
            coordinates: [0, 0]
          },
          properties: {
            name: ""
          }
        },
        plan: {
          nombre: "",
          canales: []
        },
        esEmpleado: false
      },
      comentarioCliente: "",
      infoTicket: [{
        fecha: "",
        hora: "",
        estado: "",
        responsableTicket: {
          nombre: "",
          apellido: ""
        },
        motivo: ""
      }],
      derivacion: {
        historialDerivaciones: [{
          fecha: "2023-11-06",
          hora: "",
          departamento: "",
          responsables: [
            {
              nombre: "",
              apellido: "",
              soluciones: [
                {
                  descripcion: "",
                  exito: true
                }
              ],
              ticketCerrado: true
            }
          ]
        }]
      }
    };
  }

  cargarTicketsTodos(): void {
    this.ticketService.traerTodos().subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }
  
  private handleResponse(data: any): void {
    this.mostrarEstructura = false;
    this.tickets = data;
    this.infoSeleccionada = '';
  }

  private handleError(error: any): void {
    this.mostrarEstructura = false;
    console.error('Error al cargar tickets:', error);
    this.infoSeleccionada = 'Error al cargar tickets.';
  }

  mostrarInfo(info: string) {
    this.infoSeleccionada = info;
  }
}
