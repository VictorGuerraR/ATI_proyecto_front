import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes: Array<any> = [];

  constructor(
    private http: HttpClient
  ) {
    this.obtenerClientes()
  }
  /////---------------------/////
  /////     OBTENER
  /////---------------------/////

  async obtenerClientes() {
    try {
      this.clientes = await this.Obclientes().toPromise()
      console.log(this.clientes)
    } catch (error) { }
  }

  Obclientes(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/cliente/obtenerCliente/');
  }


  /////---------------------/////
  /////     CREAR
  /////---------------------/////
  insertarCliente(params: any): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/equipo/informacionVistaEquipos`,
      { params });
  }



  /////---------------------/////
  /////     ELIMINAR
  /////---------------------/////
  async eliminarCliente(params: any) {
    try { await this.elCliente(params).toPromise() }
    catch (error) { }
  }

  elCliente(params: any): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/cliente/eliminarCliente/`,
      { params });
  }


  /////---------------------/////
  /////     ACTUALIZAR
  /////---------------------/////
  actualizarCliente(params: any): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/equipo/informacionVistaEquipos`,
      { params });
  }
}