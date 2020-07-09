import { Component, OnInit, ElementRef } from '@angular/core';
import { SettingService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
    ".selector{cursor: pointer;}"
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor( private settings:SettingService) {

  }

  ngOnInit(): void {
    this.moveCheck(this.settings.getTemaLocalstorage());
  }

  cambiarColor(color:string){
    this.settings.cargarTemaLocalstorage(color);
    this.moveCheck(color);
  }

  moveCheck(color){
    let elements:any = document.getElementsByClassName("selector");
    for(let element of elements){
      element.classList.remove("working");
    }
    document.getElementById(`${color}-theme`).classList.add("working");
  }

}
