import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService,SidebarService,SettingService} from "./service.index"


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    SharedService,
    SettingService,
    SidebarService
  ]
})
export class ServiceModule { }
