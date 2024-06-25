# Projeto Papelaria Rabisco

Este projeto consiste em uma aplicação web para uma papelaria, com o backend desenvolvido em Python usando Flask e o frontend em React. O backend se conecta a um banco de dados MySQL para armazenar e gerenciar dados.

## Funcionalidades 

- **Cadastro de Produto**: Permite adicionar novos produtos ao estoque da papelaria, incluindo nome, descrição, preço e quantidade.
- **Alteração de Quantidade**: Permite modificar a quantidade disponível de um produto no estoque.
- **Alteração de Preço**: Permite alterar o preço de um produto cadastrado.
- **Listagem de Produtos**: Mostra todos os produtos cadastrados na papelaria.
- **Exclusão de Produto**: Remove um produto do estoque da papelaria.
### Por momento todas as funcionalidades - tirando a listagem - estão funcionando apenas no back-end.

## Tecnologias Utilizadas

### Backend

- **Python**: Linguagem principal para desenvolvimento do backend.
- **Flask**: Microframework utilizado para criar a API RESTful.
- **MySQL**: Banco de dados relacional utilizado para armazenar dados.


### Frontend

- **React**: Biblioteca JavaScript para construção da interface de usuário.
- **Axios**: Biblioteca para fazer requisições HTTP ao backend.
- **Bootstrap**: Framework CSS para estilização responsiva.

## Instalação e Configuração

### Pré-requisitos

- **Python 3.8+**
- **Node.js 14+**
- **MySQL**

### Backend

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/papelaria.git
    cd papelaria/backend
    ```

2. Crie e ative um ambiente virtual:
    ```bash
    python -m venv venv
    source venv/bin/activate  # Linux/macOS
    venv\Scripts\activate  # Windows
    ```

3. Instale as dependências:
    ```bash
    pip install -r requirements.txt
    ```

4. Configure o banco de dados MySQL:
    - Crie um banco de dados chamado `papelaria`.
    - Configure as credenciais do banco de dados no arquivo `config.py`.

5. Execute as migrações para criar as tabelas no banco de dados:
    ```bash
    flask db upgrade
    ```

6. Inicie o servidor Flask:
    ```bash
    flask run
    ```

### Frontend

1. Navegue até o diretório do frontend:
    ```bash
    cd ../frontend
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```

### Executando a Aplicação

1. Acesse a aplicação frontend em `http://localhost:3000`.
2. A API backend estará disponível em `http://localhost:5000`.

## Estrutura do Projeto

```
papelaria/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── models.py
│   │   ├── routes.py
│   │   ├── ...
│   ├── migrations/
│   ├── venv/
│   ├── config.py
│   ├── requirements.txt
│   └── run.py
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│   └── ...
└── README.md
```

## Licença

Este projeto é fornecido sob a Licença [MIT](LICENSE).

## Contribuições

Contribuições são bem-vindas. Sinta-se à vontade para fazer um fork do repositório e abrir um Pull Request com melhorias, correções ou novos recursos.

## Contato

- Autor do Projeto: Isabella Cairac Bagdal

- Instrutor de Programação Web Front-End: Rafael Ribas

- Instrutor de Programação Web Back-End: João Paulo

© 2024 Papelaria Rabisco
