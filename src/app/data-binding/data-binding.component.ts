import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "https://estudante.sc.senai.br";
  urlimagem: string = "http://lorempixel.com/400/200/sports/";
  valorArmazenado: string = "";
  valorAtual: string = "";
  isMouseOVer: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  armazenarValor(valor: string) {
    this.valorArmazenado = valor;
  }

  onMouseOver() {
    this.isMouseOVer = true;
  }

  onMouseOut() {
    this.isMouseOVer = false;
  }

}
