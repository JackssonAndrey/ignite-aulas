<h2 align="center">Desafio 01 🚀</h2>
<h5 align="center">Ignite - <a href="https://rocketseat.com.br/" >Rocketseat</a> - Trilha Node js</h5>

## 💻 Descrição

Desenvovler uma aplicação para gerenciar tarefas (em inglês todos).

## 🛠️ Funcionalidades

- Criar um usuário com `name` e `username`
- Criar um novo todo
- Listar todos os _todos_;
- Alterar o `title` e `deadline` de um _todo_ existente;
- Marcar um _todo_ como feito;
- Excluir um _todo_;

## 🔗 Rotas

- POST `/users` → criar um usuário.
- GET `/todos` → lista com todas as tarefas do usuário.
- POST `/todos` → criar um todo.
- PUT `/todos/:id` → atualiza um todo.
- PATCH `/todos/:id/done` → atualiza a propriedade `done` do todo para `true`.
- DELETE `/todos/:id` → deleta um todo pela `id`

### 📝 Clonagem e uso

Para clonar o repositório rode `https://github.com/JackssonAndrey/ignite-desafio-01.git` no seu terminal.
Entre na pasta do projeto e rode `yarn` no seu terminal para instalar as dependências.

##### Uso

Com as dependências instaladas rode `yarn dev` para subir o servidor. Para rodar os testes rode `yarn test`.
