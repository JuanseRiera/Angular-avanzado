import { Component, OnInit, Input } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

type GraficosType = {
  [name: string]: {
      labels:Array<string>,
      data:Array<number>,
      type:string,
      leyenda:string
  }
};

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  @Input() datos:GraficosType;

  constructor() { }

  ngOnInit(): void {
  }

}
