# Site Art&Gula

## Descrição
**Art&Gula** é um site desenvolvido para uma aconchegante doceria e cafeteria localizada no charmoso bairro de Moema, em São Paulo. A Art&Gula é especializada em bolos, docinhos, salgados, doces personalizados e tematizados. O site funciona como uma vitrine online, além de oferecer uma tela de login funcional e uma área de administração para gerenciar o conteúdo.

## Funcionalidades
- **Landing Page:**
  - Exibição de produtos e serviços oferecidos pela Art&Gula.
  - Galeria de imagens do estabelecimento e dos produtos.
  - Informações de contato e localização.

- **Tela de Login:**
  - Autenticação de usuários.

- **Área de Administração:**
  - Acesso restrito apenas para administradores.
  - Gerenciamento de cardápios, produtos, eventos e imagens do estabelecimento.
  - Criação, leitura, atualização e exclusão (CRUD) de cardápios,produtos,imagens e eventos.

## Tecnologias Utilizadas
- **Frontend:**
  - **React.js:** Biblioteca JavaScript para construção da interface do usuário.
  - **Javascript:** Principal linguagem do projeto.
  - **HTML/SASS:** Documentação base das paginas e estilização.
  - **Axios:** Biblioteca para realizar requisições HTTP.

- **Backend:**
  - **Node.js:** Ambiente de execução para JavaScript no servidor.
  - **Express.js:** Framework para Node.js.
  - **MySQL:** Banco de dados relacional.
  - **Multer** Ferramenta para criação de pastas Storage e armazenamento de imagem.

## Setup

Para configurar o ambiente de desenvolvimento FullStack do sistema, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados. Você pode verificar isso com os seguintes comandos:

```bash
node -v
npm -v
```

### 1. Clone o Repositório

```bash
git clone https://github.com/guilhermepicasso/Art-Gula_Site.git
```
### 2. Instale as Dependências

Certifiquece de instalar as dependências de ambas as partes, frontend e backend.

####FrontEnd

```bash
cd front
npm install
```

####BackEnd

```bash
cd API
npm install
```

### 3.Configure o Banco de Dados
Para o programa funcionar você precisa ter instalado na sua máquina o MySQL Workbench e inserir a database do sistema.Caso não saiba utilizar a ferramenta aconselho a seguir esse tutorial : https://www.alura.com.br/artigos/mysql-do-download-e-instalacao-ate-sua-primeira-tabela?srsltid=AfmBOooNptdzLpCDZzjtEjxHK5ImigrIHQZmg6w-a9p8lOBwnX_y_xpw
#### Database do sistema
```sql
CREATE database Loja;
USE Loja;

create table cardapio(
	id int auto_increment primary key,
    nome varchar(50) not null
);

create table grupo(
	id int auto_increment primary key,
    nome varchar(50),
    idCardapio int,
    foreign key (idCardapio) references cardapio(id)
);

create table produto(
	id int auto_increment primary key,
    nome varchar(50) not null,
    descricao varchar(500),
    valor decimal(10,2),
    peso varchar(10),
    imagem varchar(255),
    idCardapio int,
    idGrupo int,
    FOREIGN KEY (idCardapio) REFERENCES cardapio(id),
    FOREIGN KEY (idGrupo) REFERENCES grupo(id)
);

create table Imagem(
	id int auto_increment primary key,
    titulo varchar(20),
    imagem varchar(255),
    carrossel int not null
);

create table Evento(
	id int auto_increment primary key,
    titulo varchar(50) not null,
    dataInicio datetime,
    dataFim datetime,
    valor decimal(10,2),
    descricao varchar(500),
    imagem varchar(255)
);
```

#### Configure as Variáveis de Ambiente
Crie um arquivo .env se não tiver na raiz do projeto da API e adicione as seguintes variáveis de ambiente:
```dotenv
PORT=5000


MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PWD=Senha
MYSQL_DB=NomeDatabase
```
Não se esqueça de alterar a senha e o nome da database para as correspondentes.
### 4. Execute o servidor
Execute o comando abaixo para ambos os arquivos API e front.
```bash
npm start
```
Ao executar o comando, o sistema vai retornar uma mensagem caso o servidor funcione:
####BackEnd
```bash
Conexão com BD realizada
API SUBIU!
```
####FrontEnd
```bash
webpack compiled successfully
```
Agora você poderá acessar o sistema em  http://localhost:3000 no seu navegador.

## Demostração
### LandingPage
![landingPage](https://github.com/user-attachments/assets/5d3988b4-52f6-4c4b-84fd-ea17376e8888)
### Login
![Login](https://github.com/user-attachments/assets/770428e5-1a79-4759-99bd-fb3e6d5188e9)
### Painel
![painel1](https://github.com/user-attachments/assets/d1cff317-7505-4c21-88b2-6da0c2c478cf)
![painel2](https://github.com/user-attachments/assets/e40361a7-4f8d-46c9-b856-3fe3e71de5f1)
![Insert](https://github.com/user-attachments/assets/e27d85d3-5d7b-4f39-884a-57e7c557cb30)
