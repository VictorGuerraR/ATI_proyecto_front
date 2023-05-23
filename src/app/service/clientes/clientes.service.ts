import { HttpClient } from '@angular/common/http';
import { Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService implements OnInit, OnChanges {

  clientes: Array<any> = [];

  constructor(
    private http: HttpClient
  ) {
    this.obtenerClientes()
  }

  ngOnInit(): void {
    this.obtenerClientes()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.obtenerClientes()
  }
  /////---------------------/////
  /////     OBTENER
  /////---------------------/////

  async obtenerClientes() {
    try {
      this.clientes = await this.Obclientes().toPromise()
    } catch (error) { }
  }

  Obclientes(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/cliente/obtenerCliente/');
  }


  /////---------------------/////
  /////     CREAR
  /////---------------------/////
  async crearCliente(params: any) {
    try {
      this.inCliente(params).subscribe(
        value => this.obtenerClientes(),
        error => console.log(' Trono chavos')
      )
    } catch (error) {

    }
  }

  inCliente(params: any): Observable<any> {
    return this.http.post(`http://localhost:3000/cliente/crearCliente/`,
      { params });
  }

  /////---------------------/////
  /////     ACTUALIZAR
  /////---------------------/////
  async actualizarCliente(params: any) {
    try {
      this.acCliente(params).subscribe(
        value => this.obtenerClientes(),
        error => console.log(' Trono chavos')
      );
    } catch (error) { }
  }

  acCliente(params: any): Observable<any> {
    return this.http.patch(`http://localhost:3000/cliente/actualizarCliente/`, { params });
  }


  /////---------------------/////
  /////     ELIMINAR
  /////---------------------/////
  async eliminarCliente(params: any) {
    try {
      this.elCliente(params).subscribe(
        value => this.obtenerClientes(),
        error => console.log(' Trono chavos')
      );
    }
    catch (error) { }
  }

  elCliente(params: any): Observable<any> {
    return this.http.delete(`http://localhost:3000/cliente/eliminarCliente/`, { params });
  }
}