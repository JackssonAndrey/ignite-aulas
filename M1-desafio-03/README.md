<h2 align="center">Desafio 03 🚀</h2>
<h5 align="center">Ignite - <a href="https://rocketseat.com.br/" >Rocketseat</a> - Trilha Node js</h5>

## 💻 Descrição

Essa aplicação realiza o CRUD (**C**reate, **R**ead, **U**pdate, **D**elete) de repositórios de projetos. Além disso, é possível dar likes em repositórios cadastrados, aumentando a quantidade de likes em 1 a cada vez que a rota é chamada.

## 🛠️ Funcionalidades

- Criar um novo repositório com `title`, `url`, `techs` e `likes`
- Listar todos os _repositórios_;
- Alterar o `title`, `url` e `techs` de um _repositório_ existente;
- Dar like em um _repositório_ existente;
- Excluir um _repositório_;

## 🔗 Rotas

- GET `/repositories` → lista com todos os repositórios.
- POST `/repositories` → criar um repositório.
- PUT `/repositories/:id` → atualiza um repositório.
- POST `/repositories/:id/like` → adiciona um like para um repositório.
- DELETE `/repositories/:id` → deleta um repositório pelo `id`

### 📝 Clonagem e uso

Para clonar o repositório rode `https://github.com/JackssonAndrey/ignite-desafio-03.git` no seu terminal.
Entre na pasta do projeto e rode `yarn` no seu terminal para instalar as dependências.

##### Uso

Com as dependências instaladas rode `yarn dev` para subir o servidor. Para rodar os testes rode `yarn test`.
