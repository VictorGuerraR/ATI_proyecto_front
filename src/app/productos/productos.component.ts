import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../service/productos/productos.service';

@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  infoProducto: any;
  productoForm: FormGroup;
  crearDialog: boolean = false;
  editarDialog: boolean = false;

  constructor(
    private fb: FormBuilder,
    private productosServ : ProductosService
  ){
    this.productoForm = this.fb.group({
      id_producto:[],
      nombre_producto: [, Validators.required],
      descripcion: [, Validators.required],
      precio: [, Validators.required],
      cantidad_stock: [, Validators.required]
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  editarD(params: any) {
    this.editarDialog = true;
    this.productoForm.patchValue(params)
  }

  async actualizarProducto(){
    this.productosServ.actualizarProducto(this.productoForm.value)
  }

  async eliminar (params:any){
    this.productosServ.eliminarProducto(params)
  }

  crearD() {
    this.crearDialog = true;
  }
  
  async crearProducto(){
    this.productosServ.crearProducto(this.productoForm.value)
  }

  get productos(){return this.productosServ.productos}
}
