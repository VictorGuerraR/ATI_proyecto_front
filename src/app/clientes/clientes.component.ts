import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ClientesService } from '../service/clientes/clientes.service';

@Component({
  selector: 'clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  editarDialog: boolean = false;
  crearDialog: boolean = false;


  constructor(
    private clienteServ: ClientesService,
  ) { }

  editar(params: any) {
    this.editarDialog = true;
    console.log(this.editarDialog, 'editar', params)
  }

  eliminar(params: any) {
    console.log('eliminar', params)
    this.clienteServ.eliminarCliente(params)
    this.clienteServ.obtenerClientes()
  }

  crear() {
    this.crearDialog = true;
  }



  get clientes(): Array<any> { return this.clienteServ.clientes }
}
