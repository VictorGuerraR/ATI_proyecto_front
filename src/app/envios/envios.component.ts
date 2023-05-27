import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnviosService } from '../service/envios/envios.service';
import { ClientesService } from '../service/clientes/clientes.service';
import { ProductosService } from '../service/productos/productos.service';

@Component({
  selector: 'envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {
  crearDialog: boolean = false;
  editarDialog: boolean = false;
  productosForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private enviosServ: EnviosService,
    private clienteServ: ClientesService,
    private productosServ: ProductosService


  ) {
    this.productosForm = this.fb.group({
      cantidad: [, Validators.required],
      precio_unitario: [, Validators.required],
      costo_envio: [, Validators.required],
      fecha_envio: [new Date() , Validators.required],
      id_pedido: [],
      id_cliente: [, Validators.required],
      id_producto: [, Validators.required],
      id_departamento: [, Validators.required],
    });
  }
  ngOnInit(): void { }


  editarD(params: any) {
    this.editarDialog = true;
    params.fecha_envio = new Date(params.fecha_envio)
    this.productosForm.patchValue(params)
  }

  actualizarEnvio() {
    this.enviosServ.actualizar(this.productosForm.value)
  }

  crearD() {
    this.crearDialog = true;
  }

  crearEnvio() {
    let datos = { ...this.productosForm.value }
    delete datos.id_pedido
    this.enviosServ.crearEnvio(datos)
  }

  eliminar(params: any) {
    this.enviosServ.eliminarEnvio({ 'id_pedido': params.id_pedido })
  }

  get departamentos() { return this.enviosServ.departamentos }
  get envios() { return this.enviosServ.envios }
  get clientes() { return this.clienteServ.clientes }
  get productos() { return this.productosServ.productos }


}
