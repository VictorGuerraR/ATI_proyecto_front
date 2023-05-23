import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Array<any> = [];

  constructor(
    private http: HttpClient
  ) {
    this.obtenerProductos()
  }

  
  /////---------------------/////
  /////     OBTENER
  /////---------------------/////

  async obtenerProductos() {
    try {
      this.productos = await this.Obproductos().toPromise()
    } catch (error) {

    }
  }

  Obproductos(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/productos/obtener/')
  }


  /////---------------------/////
  /////     CREAR
  /////---------------------/////
  async crearProducto(params: any) {
    try {
      this.Crproducto(params).subscribe(
        value => this.obtenerProductos(),
        error => console.log('No creo el producto ')
      )
    } catch (error) {}
  }

  Crproducto(params: any): Observable<any> {
    return this.http.post(`http://localhost:3000/productos/crear/`, { params });
  }


  /////---------------------/////
  /////     ACTUALIZAR
  /////---------------------/////
  async actualizarProducto(params: any) {
    try {
      this.Acproducto(params).subscribe(
        value => this.obtenerProductos(),
        error => console.log('No actualizo ')
      )
    } catch (error) {}
  }

  Acproducto(params: any): Observable<any> {
    return this.http.patch(`http://localhost:3000/productos/actualizar/`, { params });
  }


  /////---------------------/////
  /////     ELIMINAR
  /////---------------------/////

  async eliminarProducto(params: any) {
    try {
      this.Elproducto(params).subscribe(
        value => this.obtenerProductos(),
        error => console.log('No elimino ')
      )
    } catch (error) { }
  }

  Elproducto(params: any): Observable<any> {
    return this.http.delete(`http://localhost:3000/productos/eliminar/`, {params});
  }
}
