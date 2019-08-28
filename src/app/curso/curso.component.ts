import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  cursoAtual: string = '';

  curso: any;
  cursos: any[] = [];

  constructor(private service: CursoService) { }

  ngOnInit() {
    this.curso = new Object();
  }

  onSubmit(formulario: NgForm) {
    if (formulario.valid) {
      //salvar curso
      // instanciar novo curso
      // atualizar lista atual de cursos
    }
  }

}
