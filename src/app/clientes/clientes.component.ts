import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClientesService } from '../service/clientes/clientes.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {
  editarDialog: boolean = true;
  crearDialog: boolean = false;
  clienteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clienteServ: ClientesService,
  ) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }


  ngOnInit(): void { }


  editarD(params: any) {
    this.editarDialog = true;
    console.log('editar', params)
  }

  eliminar(params: any) {
    console.log('eliminar', params)
    this.clienteServ.eliminarCliente(params)
    this.clienteServ.obtenerClientes()
  }

  crearD() {
    this.crearDialog = true;
  }

  submitForm(){
    console.log(this.clienteForm.value)
  }



  get clientes(): Array<any> { return this.clienteServ.clientes }
}
