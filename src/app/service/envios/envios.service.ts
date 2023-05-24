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



  /////---------------------/////
  /////     ACTUALIZAR
  /////---------------------/////




  /////---------------------/////
  /////     ELIMINAR
  /////---------------------/////




  /////---------------------/////
  /////     OBTENER
  /////---------------------/////
  async obtenerEnvios() {
    try {
      this.envios = await this.Obenvios().toPromise()
      console.log(this.envios)
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
      console.log(this.departamentos)
    } catch (error) {console.log('fallo Obtener departamentos') }
  }

  Obdepartamentos(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/envios/catalogo/');
  }
}
