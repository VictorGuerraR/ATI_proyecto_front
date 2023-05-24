import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnviosService } from '../service/envios/envios.service';

@Component({
  selector: 'envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent {
  crearDialog: boolean = false;
  editarDialog: boolean = false;
  productosForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private enviosServ: EnviosService
  ){
    this.productosForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }

  editarD(params: any) {
    this.editarDialog = true;
  }

  actualizarEnvio(){

  }
  
  crearD() {
    this.crearDialog = true;
  }

  eliminar(params: any){}

  get departamentos(){return this.enviosServ.departamentos}
  get envios(){return this.enviosServ.envios}
}
