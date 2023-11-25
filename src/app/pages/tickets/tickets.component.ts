import { Component } from '@angular/core';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {
  infoSeleccionada = '';
  tickets: any[] = [];
  estructuraConsulta: any;
  mostrarEstructura = false;

  constructor() { }

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
        localidad:{
          codigoPostal:0,
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
      infoTicket: [],
      derivacion: {
        historialDerivaciones: []
      }
    };
  }

  mostrarInfo(info: string) {
    this.infoSeleccionada = info;
  }
}
