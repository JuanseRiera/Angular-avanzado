import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  porcentaje1:number=50;
  porcentaje2:number=50;
  constructor() { }

  ngOnInit(): void {
  }
}
