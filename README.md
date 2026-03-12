# API REST de Produtos

Nome: Júlia Leal  
Matrícula: 202501681451  

## Descrição
API REST desenvolvida em Node.js com Express para gerenciamento de produtos.

## Como executar

1. Instalar dependências:
npm install

2. Rodar o projeto:
npm run dev

3. API será iniciada em:
http://localhost:3000

## Endpoints

| Método | Rota | Descrição |
|------|------|------|
| GET | /produtos | Lista todos os produtos | 200 |
| GET | /produtos/:id | Retorna um produto pelo ID | 200 / 404 |
| POST | /produtos | Cria um novo produto | 201 / 400 |
| PUT | /produtos/:id | Atualiza completamente um produto | 200 / 404 |
| DELETE | /produtos/:id | Remove um produto | 204 / 404 |
