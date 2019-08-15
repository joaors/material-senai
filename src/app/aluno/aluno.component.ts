import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  private alunosDesenv: string[] = [];
  private alunosRedes: string[] = [];
  @Input() curso: string = '';

  constructor() { }

  ngOnInit() {
    this.alunosDesenv = ['pedro', 'jose', 'maria'];
    this.alunosRedes = ['teobaldo', 'gertrudez', 'enesio'];
  }

  getAlunos() {
    if (this.curso === 'desenvolvimento') {
      return this.alunosDesenv;
    }
    
    if (this.curso === 'redes') {
      return this.alunosRedes;
    }
    return [];
  }

}
