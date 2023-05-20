import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ClientesService } from '../service/clientes/clientes.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {
  infoCliente: any;
  clienteForm: FormGroup;
  crearDialog: boolean = false;
  editarDialog: boolean = false;

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

  ngOnInit():void{
    this.clienteServ.obtenerClientes()
  }
  
  ngOnChanges(changes: SimpleChanges):void{
    this.clienteServ.obtenerClientes()
  }
  


  editarD(params: any) {
    this.infoCliente = {...params};
    this.editarDialog = true;
    this.clienteForm.setValue({
      nombre: params.nombre,
      direccion: params.direccion,
      telefono: params.telefono,
    })
  }

  async actualizarCliente(){
    let values = {...this.clienteForm.value}
    this.infoCliente.nombre = values.nombre;
    this.infoCliente.direccion = values.direccion;
    this.infoCliente.telefono = values.telefono;
    await this.clienteServ.actualizarCliente(this.infoCliente);
    this.editarDialog = false;

  }

 async eliminar(params: any) {
    console.log('eliminar', params)
    await this.clienteServ.eliminarCliente(params);
  }

  crearD() {
    this.crearDialog = true;
  }

  async crearCliente(){
    let values = {...this.clienteForm.value}
    await this.clienteServ.crearCliente(values)
    this.crearDialog = false; 
  }




  get clientes(){console.log('aaaaaaaaa',  this.clienteServ.clientes); return this.clienteServ.clientes;}
}
