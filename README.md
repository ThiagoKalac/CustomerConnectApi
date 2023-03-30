<h1 align="center" id="top">CustomerConnectApi</h1>

<br />

<blockquote>
    <br>
            <p>API construinda em nodeJs para fazer gerenciamento de contatos.</p>
        <p>O objetivo principal é permitir que o Client/User possa Buscar, Criar, Atualizar e Deletar seus contatos</p>
    <br>
</blockquote>

<br />

<p>
    Indice:
</p>

<ul>
    <li>
        1 - <a href="#install">Instalação e configuração</a>
    </li>
    <li>
        2- <a href="#doc">Documentação da API</a>
         <ul>
               <li>
                    <a href="#withouAuthentication">Rotas sem autenticação</a>
                    <ul>
                         <li>
                              <a href="#createClient">Cliente: POST - 201 - Created</a>
                         </li>
                         <li>
                              <a href="#login">Session: POST - 200 - Login </a>
                         </li>
                    </ul>
               </li>
               <li> 
                    <a href="#authentication">Rotas com autenticação</a>
                    <ul>
                         <li>
                              <a href="#client">Client</a>
                              <ul>
                                   <li>
                                         <a href="#getClient">Cliente: GET - 200 - Profile</a>
                                   </li>
                                   <li>
                                         <a href="#patchClient">Cliente: PACTH - 200 - Update</a>
                                   </li>
                                    <li>
                                         <a href="#deleteClient">Cliente: DELETE - 204 - Delete</a>
                                   </li>
                              </ul>
                         </li>
                         <li>
                              <a href="#contact">Contact</a>
                              <ul>
                                   <li>
                                         <a href="#getContact">Contato: GET - 200 - List</a>
                                   </li>
                                   <li>
                                         <a href="#createContact">Contato: POST - 201 - Create</a>
                                   </li>
                                   <li>
                                         <a href="#patchContact">Contato: PATCH - 200 - Update</a>
                                   </li>
                                   <li>
                                         <a href="#deleteContact">Contato: DELETE - 204 - Delete</a>
                                   </li>
                              </ul>
                         </li>
                    </ul>
               </li>
          </ul>
    </li>
   <li>
	3 - <a href="insomnia">Importando Workspace para insomnia</a>
   </li>
</ul>


<br>
<hr>
<br>

<h2 align="center" id="install">Instalação e Configuração</h2>
<br>
<hr>
<br>

<blockquote>
    <br>
        <p align="center">Para rodar a aplicação, é necessário ter o Node.js v18.12.1 ou superior instalado. Também é necessário instalar as dependências do package.json</p>
        <p>Banco de dados PostgreSQL</p>
    <br>
</blockquote>

<p>Links para download:</p>

<ul>
    <li>
        <a href="https://nodejs.org/pt-br" target="_blank">Node.js</a>
    </li>
     <li>
        <a href="https://www.postgresql.org/download/" target="_blank">PostgreSQL.js</a>
    </li>
</ul>

<br>
<br>
    <p>Para instalar as dependencias necessarias e para rodar a API localmente, siga os passos abaixo:</p>
<br>
<ul>
    <li>1 - Tenha instalado o node.js em seu computador</li>
    <li>2 - O sistema de gerenciamento de banco de dados, o PostGree</li>
    <li>3 - No seu editor de código, abra o terminal e instale as dependencias com os seguintes comando:</li>

<br>
<h3>Npm</h3>

```bash
npm i
```

<h3>Yarn</h3>

```bash
yarn
```

   <li>4 - Crie um arquivo .env com as mesmas variaveis do arquivo .env.example para realizar as configurações do banco de dados </li>
   <br>
<blockquote>
    <br>
        <p align="center">ATENÇÃO</p>
        <p align="center">Os nomes das variavies precisam ser iguais aos exemplos do arquivo .env.example</p>
    <br>
</blockquote>
<br>
<li>5 - Para criar as tabelas no banco de dados, rode o seguinte comando no terminal:</li>

<h3>Npm</h3>

```bash
npm run typeorm migration:run -d ./src/data-source
```

<h3>Yarn</h3>

```bash
yarn typeorm migration:run -d ./src/data-source
```
<br>
<li>6 - para rodar a api localmente, digite o seguinte comando no terminal:
</li>

<h3>Npm</h3>

```bash
npm run dev
```

<h3>Yarn</h3>

```bash
yarn dev
``` 
</ul>
<br>
<hr>
<br>
<h2 align="center" id="doc"> Documentação API</h2>
<br>
<hr>

<h2 id="withouAuthentication"> Rotas sem autenticação </h2>
<br>

<details>
<summary id="createClient">201 - Create Client/User </summary>

<br>
<p>Endpoint: <br> http://localhost:3000/client </p>
<br>

Body:
```json
{
	"nickname": "Thiago",
	"fullName":"Thiago Rodriues da Silva",
	"telephone": "67988880000",
	"telephonesExtra": ["67988880001", "67988880002", "67988880003"],
	"email": "thiago@mail.com",
	"emailsExtra": ["thiago1@mail.com", "thiago2@mail.com","thiago3@mail.com"],
	"password": "Asd@13579"
}
```

Response:
```json
{
	"id": "962c8fd8-794e-4cb2-bc58-df5eac8f2481",
	"nickname": "thiago",
	"fullName": "Thiago Rodriues da Silva",
	"email": "thiago@mail.com",
	"telephone": "67988880000",
	"createdAt": "2023-03-29T19:31:31.853Z",
	"emailsExtra": [
		"thiago1@mail.com",
		"thiago2@mail.com",
		"thiago3@mail.com"
	],
	"telephonesExtra": [
		"67988880001",
		"67988880002",
		"67988880003"
	]
}
```

## Possíveis erros

409 - Email já existente:

```json
{
	"message": "E-mail already registered"
}
```

409 - NickName já existente:
```json
{
	"message": "Nickname already registered"
}
```

400 - Dados não passados no body

```json
{
	"message": [
		"nickname is a required field",
		"fullName is a required field",
		"telephone is a required field",
		"email is a required field",
		"password is a required field"
	]
}
```
</details>


<details>
<summary id="login">200 - Login</summary>
<br>
<p>Endpoint: <br> http://localhost:3000/login </p>

Body:

```json
{
	"emailOrNickname": "thiago",
	"password":"Asd@12345"
}
```
ou

```json
{
	"emailOrNickname": "thiago@mail.com",
	"password":"Asd@12345"
}
```

Response:

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODAxMTY0MzYsImV4cCI6MTY4MDIwMjgzNiwic3ViIjoiMDQ3YWQwMzEtNTIzYy00ZmRlLWIwODItMmE0ZGEyZjUwYjIwIn0.xzvUDPKnETvyobZWEhT54bXUtV3sX3nUQ2hSFn89IoU"
}
```

### Possíveis erros

403 - Dados inválidos/errados (email ou senha):

```json
{
	"message": "Wrong email or nickname/password"
}
```
</details>

<br>
<hr>
<h2 id="authentication"> Rotas com autenticação </h2>
<br>

<h3 id="client">Client</h3>

<p align="center"> Todas as rotas precisa passar o Bearer Token</p>
<blockquote>
    <br>

Headers
```json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAbWFpbC5jb20iLCJpYXQiOjE2Nzk4ODU2MDAsImV4cCI6MTY3OTg4OTIwMH0.Ejr-6t2LBQaO1YHDVmgLxIv-C0-Okeq_ytHMFrOSkcg
```
   <br>
</blockquote>

<br>

<details>
     <summary id="getClient">200 - Get Profile Client</summary>
     <br>
     <p>Endpoint: <br> http://localhost:3000/client </p>
     <br>
     ### Coletando dados de um usuário logado

É necessário passar o Bearer token, ou seja, as rotas do cliente irá funcionar só se o usuario estiver logado e passar um token valido.

Response:

```json
{
	"id": "962c8fd8-794e-4cb2-bc58-df5eac8f2481",
	"nickname": "thiago",
	"fullName": "Thiago Rodriues da Silva",
	"email": "thiago@mail.com",
	"telephone": "67988880000",
	"createdAt": "2023-03-29T19:31:31.853Z",
	"emailsExtra": [
		"thiago1@mail.com",
		"thiago2@mail.com",
		"thiago3@mail.com"
	],
	"telephonesExtra": [
		"67988880001",
		"67988880002",
		"67988880003"
	],
	"contact": [
		{
			"id": "4d58f4bb-d4a9-471f-9270-e4b0601d7707",
			"nickname": "Fernando Souza",
			"fullName": "Fernando Souza",
			"telephone": "67989879009",
			"telephonesExtra": [
				"67989879029",
				"67989879679"
			],
			"email": "fernando@mail.com",
			"emailsExtra": [
				"fernando_prof@mail.com"
			],
			"createdAt": "2023-03-29T19:49:20.892Z"
		}
	]
}
```

### Possíveis erros

401 - Token invalido

```json
{
	"message": "invalid token"
}
```

409 - Client/User não existe

```json
{
	"message": "user not exist"
}
```
401 - Token inspirado 
```json
{
	"message": "jwt expired"
}
```

</details>

<details>
     <summary id="patchClient">200 - Pacth Update Client</summary>
     <br>
     <p>Endpoint: <br> http://localhost:3000/client </p>
     <br>

     ### Atualizando os dados de um usuário

A rota pega o usuário para atualizar com base no token, ou seja, é necessário passar o Bearer token e não é necessário passar todos os campos para atualizar no banco de dados.


Body:

```json
{
	"fullName":"Thiago Silva",
	"telephone": "67991000730",
	"telephonesExtra": ["67991000731" , "67991000732"],
	"emailsExtra": ["thiagorodriguessilva1994@hotmail.com"],
	"password":123456
}
```

Response:

```json
{
	"id": "962c8fd8-794e-4cb2-bc58-df5eac8f2481",
	"nickname": "thiago",
	"fullName": "Thiago Silva",
	"email": "thiago@mail.com",
	"telephone": "67991000730",
	"createdAt": "2023-03-29T19:31:31.853Z",
	"emailsExtra": [
		"thiagorodriguessilva1994@hotmail.com"
	],
	"telephonesExtra": [
		"67991000731",
		"67991000732"
	]
}
```

### Possíveis erros

401 - Token invalido

```json
{
	"message": "invalid token"
}
```

409 - Client/User não existe

```json
{
	"message": "user not exist"
}
```
401 - Token inspirado 
```json
{
	"message": "jwt expired"
}
```
409 - Email já existente:

```json
{
	"message": "E-mail already registered"
}
```

409 - NickName já existente:
```json
{
	"message": "Nickname already registered"
}
```
</details>
<details>
     <summary id="deleteClient">204 - Delete Client</summary>
     <br>
     <p>Endpoint: <br> http://localhost:3000/client </p>
     <br>

### Deletando um cliente

A rota pega o usuário para deletar com base no token, ou seja, é necessário passar o Bearer token somente.

Response:

```
No body returned for response
```

### Possíveis erros

401 - Token invalido

```json
{
	"message": "invalid token"
}
```

409 - Client/User não existe

```json
{
	"message": "user not exist"
}
```
401 - Token inspirado 
```json
{
	"message": "jwt expired"
}
```
</details>
<hr>
<h3 id="contact">Contact</h3>
<p align="center"> Todas as rotas precisa passar o Bearer Token</p>
<blockquote>
    <br>

Headers
```json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAbWFpbC5jb20iLCJpYXQiOjE2Nzk4ODU2MDAsImV4cCI6MTY3OTg4OTIwMH0.Ejr-6t2LBQaO1YHDVmgLxIv-C0-Okeq_ytHMFrOSkcg
```
   <br>
</blockquote>
<br>

<details>
<summary id="getContact">200 - Get List Contact</summary>

### Coletando dados dos contatos de um cliente

<br>

É necessário estar logado e passar o Bearer token valido, ou seja, para listar os contatos desse cliente, ele precisa estar logado e passar o token dele.

Response:

```json
[
	{
		"id": "4d58f4bb-d4a9-471f-9270-e4b0601d7707",
		"nickname": "Fernando Souza",
		"fullName": "Fernando Souza",
		"telephone": "67989879009",
		"telephonesExtra": [
			"67989879029",
			"67989879679"
		],
		"email": "fernando@mail.com",
		"emailsExtra": [
			"fernando_prof@mail.com"
		],
		"createdAt": "2023-03-29T19:49:20.892Z"
	},
	{
		"id": "1bcc899d-45ec-4738-be47-2727f6185a59",
		"nickname": "carlossouza",
		"fullName": "Carlos Souza Silva",
		"telephone": "67989879000",
		"telephonesExtra": [
			"67989879001",
			"67989879002"
		],
		"email": "carlos@mail.com",
		"emailsExtra": [
			"carlos_prof@mail.com"
		],
		"createdAt": "2023-03-29T22:58:02.683Z"
	}
]
```

### Possíveis erros

401 - Token invalido

```json
{
	"message": "invalid token"
}
```

409 - Client/User não existe

```json
{
	"message": "user not exist"
}
```
401 - Token inspirado 
```json
{
	"message": "jwt expired"
}
```

</details>

<details>
<summary id="postContact">201 - Post Create Contact</summary>
<br>

### Criando um contato para um cliente
Para criar um contato, o Usuario/Cliente precisa estar logado e passar o Bearer Token, ataves to token o contato criado será associado a ele.

Body:

```json
{
	"nickname": "Fernando Souza",
	"fullName":"Fernando Souza",
	"telephone": "67989879009",
	"telephonesExtra": ["67989879029", "67989879679"],
	"email": "fernando@mail.com",
	"emailsExtra": ["fernando_prof@mail.com"]
}
```

Response:

```json
{
	"nickname": "Fernando Souza",
	"fullName": "Fernando Souza",
	"telephone": "67989879009",
	"telephonesExtra": [
		"67989879029",
		"67989879679"
	],
	"email": "fernando@mail.com",
	"emailsExtra": [
		"fernando_prof@mail.com"
	],
	"client": "962c8fd8-794e-4cb2-bc58-df5eac8f2481",
	"id": "1bcc899d-45ec-4738-be47-2727f6185a59",
	"createdAt": "2023-03-29T22:58:02.683Z"
}
```

### Possíveis erros

401 - Token invalido

```json
{
	"message": "invalid token"
}
```

409 - Client/User não existe

```json
{
	"message": "user not exist"
}
```
401 - Token inspirado 
```json
{
	"message": "jwt expired"
}
```
400 - Dados não passados no body

```json
{
	"message": [
		"nickname is a required field",
		"fullName is a required field",
		"telephone is a required field",
		"email is a required field",
		"password is a required field"
	]
}
```

</details>

<details>
<summary id="patchContact">200 - Patch Update Contact</summary>
<br>

### Atualizando os dados de um contato

O cliente/user precisa estar logado e passar o Bearer Token e o ID do contato que vai ser alterado.

*** Somente o criador do contato, pode atualizar ele *** 

Body:

```json
{
	"nickname": "Carlos",
	"fullName": "Carlos Silva",
	"telephone": "67989879009",
	"telephonesExtra": [
		"67989879679",
		"67999900000"
	],
	"email": "carlos@masil2.com",
	"emailsExtra": [
		"thhi@mail.com"
	]
}
```

Response:

```json
{
	"id": "8b8295ec-8344-40f2-830d-fb04e26ee4d2",
	"nickname": "Carlos",
	"fullName": "Carlos Silva",
	"telephone": "67989879009",
	"telephonesExtra": [
		"67989879679",
		"67999900000"
	],
	"email": "carlos@masil2.com",
	"emailsExtra": [
		"thhi@mail.com"
	],
	"createdAt": "2023-03-23T21:43:57.748Z"
}
```

### Possíveis erros

401 - Token invalido

```json
{
	"message": "invalid token"
}
```

409 - Client/User não existe

```json
{
  "message": "user not exist"
}
```
401 - Token inspirado 
```json
{
	"message": "jwt expired"
}
```

409 - Id passado é contato de outro usuario/cliente:
```json
{
	"message": "Customer is not the creator of this contact "
}
```
409 - Contato não existe:
```json
{
	"message": "contact not found or don't exist"
}
```

</details>

<details>
<summary id="delete">204 - Delete Contact</summary>
<br>

### Deletando um contato

O cliente/user precisa estar logado e passar o Bearer Token e o ID do contato que vai ser deletado.

*** Somente o criador do contato, pode deletar ele *** 


Response:

```
No body returned for response
```

### Possíveis erros

401 - Token invalido

```json
{
	"message": "invalid token"
}
```

409 - Client/User não existe

```json
{
  "message": "user not exist"
}
```
401 - Token inspirado 
```json
{
	"message": "jwt expired"
}
```

409 - Id passado é contato de outro usuario/cliente:
```json
{
	"message": "Customer is not the creator of this contact "
}
```
409 - Contato não existe:
```json
{
	"message": "contact not found or don't exist"
}
```

</details>
<br>
<br>
<hr>
<br>

## Importanto Workspace para o Insomnia

```
 Toda a documentação está incluida no workspace
```

<ol>
	<li>Abra o Insomnia e clique no botão <code>+ CREATE</code> a esquerda.</li>
	<li>Selecione a opção <code>+ File</code> na lista de opções.</li>
	<li>Na janela de importação, navegue até o diretório onde você clonou o repositório.</li>
	<li> Selecione o arquivo do workspace <code> custommer_connect_workspace.json </code> e clique no botão <code>Import</code>.</li>
	<li>O Insomnia importará automaticamente o workspace e todos os seus endpoints.</li>
</ol>

<br>
<hr>

<a href="#top">voltar ao topo</a>