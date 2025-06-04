import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private baseURL = 'http://localhost:3030/livros';

  async obterLivros(): Promise<Livro[]> {
    const resposta = await fetch(this.baseURL);
    const dados = await resposta.json();
    return dados.map((l: any) => {
      return {
        codigo: l._id, // importante!
        codEditora: l.codEditora,
        titulo: l.titulo,
        resumo: l.resumo,
        autores: l.autores
      };
    });
  }

  async incluir(livro: Livro): Promise<boolean> {
    const resposta = await fetch(this.baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(livro)
    });
    return resposta.ok;
  }

  async excluir(codigo: string): Promise<boolean> {
    const resposta = await fetch(`${this.baseURL}/${codigo}`, { method: 'DELETE' });
    return resposta.ok;
  }
}
