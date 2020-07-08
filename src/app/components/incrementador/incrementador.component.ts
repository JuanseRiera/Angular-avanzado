import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild("input") input: ElementRef;

  @Input() porcentaje: number = 50;
  @Input('setearTitulo') Titulo: string = "Incrementador";

  @Output() cambiarNumero: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarValor(valor: number) {
    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = Number(this.porcentaje) + Number(valor);
    this.cambiarNumero.emit(this.porcentaje);
  }

  cambioNum(e) {
    if (e >= 100) {
      e = 100;
    }
    if (e <= 0) {
      e = 0;
    }
    this.porcentaje = e;
    this.input.nativeElement.value = e;
    this.input.nativeElement.focus();
    this.cambiarNumero.emit(this.porcentaje);
  }
}
