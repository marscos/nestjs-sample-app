# Descrição

Microsserviço que permite o registro de gestão de departamentos e colaboradores.

# Banco de Dados

Para fins de simplicidade, atualmente o schema do Prisma está definido de forma a usar um banco de dados SQLite.

Para usar um SGBD diferente, basta alterar o `datasource` definido no arquivo `schema.prisma`.

O caminho do banco de dados a ser utilizado é definido na variável de ambiente `DATABASE_URL`.

A versão atualmente publicada do app usa um arquivo SQLite criado na pasta do Prisma (i.e. `DATABASE_URL="file:./dev.db"`).
**Portanto, os dados atualmente não são persistidos entre publicações do serviço.**

# Setup

## Instalar dependências

```bash
$ npm install
```

## Inicialização

```bash
# dev
$ prisma generate
$ npm run start:dev

# prod
$ prisma generate
$ npm run build
$ prisma migrate
$ npm run start:prod
```

## Testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Documentação

A documentação (Swagger) está disponível no endpoint `/api` do serviço.

# Publicação

A branch `main` é publicada automaticamente em uma instância no [Koyeb](https://www.koyeb.com).

# Versionamento da API

Como o serviço é provisionado por imagens Docker, basta publicar versões do serviço em diferentes caminhos (e.g.: `https://example.com/api/v1/`, `https://example.com/api/v2/` etc.)
