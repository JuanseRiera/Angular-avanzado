import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  tema:string="default-dark";

  constructor() {
    this.cargarTemaLocalstorage(this.getTemaLocalstorage());
   }

  cargarTemaLocalstorage(tema){
    let urlTema:string=`assets/css/colors/${tema}.css`;
    document.getElementById("tema").setAttribute("href", urlTema);
    localStorage.setItem("tema",tema);
  }

  getTemaLocalstorage(){
    if(localStorage.getItem("tema")){
      return localStorage.getItem("tema");
    }else{
      return this.tema;
    }
  }

}
