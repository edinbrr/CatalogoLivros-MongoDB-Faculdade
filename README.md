<h1 align="center">📚 Cadastro de Livros</h1>

<p align="center">
  Sistema completo com Angular + Node.js + MongoDB para gerenciar livros 📘📗📕
</p>

<p align="center">
  <strong>Projeto prático da disciplina DGT2815 - Integração de Páginas Web com Banco de Dados</strong>
</p>

---

## ✨ Tecnologias Utilizadas

- ⚙️ **Backend:** Node.js + Express
- 💾 **Banco de Dados:** MongoDB + Mongoose
- 🌐 **Frontend:** Angular
- 🌍 **API REST:** Comunicação via HTTP com CORS habilitado

---

## 🎯 Funcionalidades

- ✅ Cadastro de livros com título, resumo, autores e editora
- 📄 Listagem dos livros cadastrados
- 🗑 Exclusão de livros com confirmação
- 🔁 Integração real com banco de dados MongoDB
- 🔔 Mensagens de feedback ao usuário (cadastro e exclusão)

---

## 🚀 Como Executar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
2️⃣ Backend – livros-servidor
bash
Copiar
Editar
cd livros-servidor
npm install
npm start
🟢 Servidor disponível em: http://localhost:3030/livros

⚠️ Certifique-se de que o MongoDB esteja instalado e em execução localmente.

3️⃣ Frontend – livros-angular
bash
Copiar
Editar
cd livros-angular
npm install
ng serve
🌐 Acesse no navegador: http://localhost:4200

📦 Estrutura de Pastas
css
Copiar
Editar
livros-servidor/
 ┣ modelo/
 ┃ ┣ conexao.js
 ┃ ┣ livro-schema.js
 ┃ ┗ livro-dao.js
 ┣ routes/
 ┃ ┗ livros.js
 ┗ app.js

livros-angular/
 ┣ src/
 ┃ ┣ app/
 ┃ ┃ ┣ livro.ts
 ┃ ┃ ┣ controle-livros.service.ts
 ┃ ┃ ┣ livro-lista/
 ┃ ┃ ┃ ┗ livro-lista.component.*
 ┃ ┃ ┗ livro-dados/
 ┃ ┃ ┃ ┗ livro-dados.component.*
📌 Observações
Todos os dados são armazenados na base livraria, coleção livros do MongoDB local.

Foram utilizadas boas práticas como serviços, injeção de dependência e modularização.

O projeto pode ser facilmente expandido com funcionalidades como edição de livros e filtros de busca.

👨‍🎓 Autor
Desenvolvido por Edson Victor
📚 Projeto acadêmico – Faculdade PY
📆 2025

<p align="center"> <strong>✔️ Trabalho 100% funcional e pronto para entrega!</strong> </p> ```
