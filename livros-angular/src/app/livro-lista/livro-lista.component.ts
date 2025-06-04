import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { ControleLivrosService } from '../controle-livros.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
  imports: [CommonModule]
})
export class LivroListaComponent implements OnInit {
  livros: Livro[] = [];

  editoras = [
    { codEditora: 1, nome: 'Alta Books' },
    { codEditora: 2, nome: 'Pearson' },
    { codEditora: 3, nome: 'Saraiva' }
  ];

  constructor(private servico: ControleLivrosService) {}

  ngOnInit(): void {
    this.servico.obterLivros().then(livros => this.livros = livros);
  }

  excluir(codigo: string): void {
  this.servico.excluir(codigo).then(sucesso => {
    if (sucesso) {
      alert('Livro excluído com sucesso!');
      this.servico.obterLivros().then(livros => this.livros = livros);
    } else {
      alert('Erro ao excluir o livro.');
    }
  });
}

  obterNome(codEditora: number): string {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : 'Desconhecida';
  }
}