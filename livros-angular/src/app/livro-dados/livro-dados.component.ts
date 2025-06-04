import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from '../livro';
import { ControleLivrosService } from '../controle-livros.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
  imports: [CommonModule, FormsModule]
})
export class LivroDadosComponent {
  livro = new Livro(0, '', '', []);
  autoresTexto: string = '';

  editoras = [
    { codEditora: 1, nome: 'Alta Books' },
    { codEditora: 2, nome: 'Pearson' },
    { codEditora: 3, nome: 'Saraiva' }
  ];

  constructor(
    private servico: ControleLivrosService,
    private router: Router
  ) {}

  incluir(): void {
    this.livro.autores = this.autoresTexto.split(',').map(a => a.trim());
    this.servico.incluir(this.livro).then(sucesso => {
      if (sucesso) {
        alert('Livro cadastrado com sucesso!');
        this.router.navigateByUrl('/lista');
      } else {
        alert('Erro ao cadastrar livro.');
      }
    });
  }

}