import { Component, OnInit } from '@angular/core';
import { CajasTesoService } from '../../services/services/cajas-teso.service';
import { BsEmpresa } from '../modelos/BsEmpresa';

@Component({
  selector: 'app-cajas-tesoreria',
  templateUrl: './cajas-tesoreria.component.html',
  styleUrls: ['./cajas-tesoreria.component.css']
})
export class CajasTesoreriaComponent implements OnInit {
  empresas:BsEmpresa[];
  empresaNit: any = "";
  public user: any;
  constructor( private cajasteso:CajasTesoService) {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    console.log ('empresa asociadas--->',this.user);
    this.empresas = this.user.empresas;

    console.log ('empresa asociadas--->',this.empresas);
  }

  ngOnInit() {
    this.getEmpresasusuario();
  }

  getEmpresasusuario(){
    let Cedula: any = JSON.parse(sessionStorage.getItem("user")).documento;
    console.log('Documento consulta', Cedula);
    this.cajasteso.getEmpresasusuario(Cedula).subscribe(info => {
     let data: any = info;
console.log(data);

   });
  }

}


