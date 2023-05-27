import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EnviosService {

  envios: Array<any> = [];
  departamentos: Array<any> = [];

  constructor(
    private http: HttpClient
  ) {
    this.obtenerDepartamentos()
    this.obtenerEnvios()
   }

  /////---------------------/////
  /////     CREAR
  /////---------------------/////
  async crearEnvio(params:any){
    console.log(params)
    try {
      this.crtEnvio(params).subscribe(
        value => this.obtenerEnvios(),
        error => console.log(' Trono chavos')
      );
    } catch (error) { }
  }

  crtEnvio(params: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/envios/crear/', { params });
  }
  /////---------------------/////
  /////     ACTUALIZAR
  /////---------------------/////
  async actualizar(params:any){
    try {
      this.actEnvio(params).subscribe(
        value => this.obtenerEnvios(),
        error => console.log(' Trono chavos')
      );
    } catch (error) {
      
    }
  }

  actEnvio(params: any): Observable<any> {
    return this.http.patch<any>('http://localhost:3000/envios/actualizar/', { params });
  }

  /////---------------------/////
  /////     ELIMINAR
  /////---------------------/////

  eliminarEnvio(params:any){
    console.log(params)
    try {
      this.delEnvio(params).subscribe(
        valor => this.obtenerEnvios() ,
        error => console.log('Trono chavos')
      )
    } catch (error) { console.log('fallo Obtener envios') }
  }

  delEnvio(params: any): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/envios/eliminar/', { params });
  }
  /////---------------------/////
  /////     OBTENER
  /////---------------------/////
  async obtenerEnvios() {
    try {
      this.envios = await this.Obenvios().toPromise()
    } catch (error) {console.log('fallo Obtener envios') }
  }

  Obenvios(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/envios/obtener/');
  }

  /////---------------------/////
  /////     DEPARTAMENTOS
  /////---------------------/////
  async obtenerDepartamentos() {
    try {
      this.departamentos = await this.Obdepartamentos().toPromise()
    } catch (error) {console.log('fallo Obtener departamentos') }
  }

  Obdepartamentos(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/envios/catalogo/');
  }
}
