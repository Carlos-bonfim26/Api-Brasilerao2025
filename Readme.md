
# ⚽ API Tabela do Campeonato 2025

Esta é uma **API RESTful** desenvolvida com **Node.js**, **Express** e **Joi**, que permite gerenciar a tabela de um campeonato de futebol.  
Com ela, é possível **listar**, **adicionar**, **atualizar** e **remover** times de forma simples e validada.

---

## Ligar o servidor
```bash
 node --watch ./app.js
 ```
---

## 🚀 Tecnologias Utilizadas
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- **Node.js** – Ambiente de execução JavaScript no servidor  
- **Express** – Framework para criação de APIs e servidores HTTP  
- **Joi** – Biblioteca para validação de dados  

---

## 📦 Instalação

Antes de começar, verifique se o **Node.js** está instalado em sua máquina.  
Depois, siga os passos abaixo:

```bash
# Inicializar o projeto
npm init -y

# Instalar dependências
npm install express
npm install joi
````

---

## ▶️ Executar o Servidor

Para iniciar o servidor com atualização automática, execute:

```bash
node --watch ./app.js
```

O servidor será iniciado na **porta 3000**.
Acesse em seu navegador ou via ferramenta como **Postman**:

```
http://localhost:3000
```

---

## 📁 Estrutura do Projeto

```
📂 tabela-campeonato-2025/
│
├── app.js              # Código principal do servidor e rotas
├── tabela.js           # Lista dos times da temporada
├── validacao.js        # Schemas de validação com Joi
├── package.json        # Configurações e dependências do projeto
└── README.md           # Documentação do projeto
```

---

## 📚 Endpoints da API

### 🔹 GET `/`

Retorna a lista completa de times cadastrados.

**Exemplo de resposta:**

```json
[
  {
    "nome": "Mirassol",
    "sigla": "MIR",
    "pontos": 0,
    "jogos": 0,
    "vitorias": 0,
    "empates": 0,
    "derrotas": 0,
    "golsMarcados": 0,
    "golsSofridos": 0,
    "saldoGols": 0
  }
]
```

---

### 🔹 GET `/:sigla`

Retorna as informações de um time específico, de acordo com a sigla informada.

**Exemplo:**

```
GET /MIR
```

**Resposta:**

```json
{
  "nome": "Mirassol",
  "sigla": "MIR",
  "pontos": 0,
  "jogos": 0,
  "vitorias": 0,
  "empates": 0,
  "derrotas": 0,
  "golsMarcados": 0,
  "golsSofridos": 0,
  "saldoGols": 0
}
```

---

### 🔹 POST `/`

Adiciona um novo time à tabela.

**Exemplo de corpo da requisição (JSON):**

```json
{
  "nome": "São Paulo",
  "sigla": "SAO",
  "pontos": 3,
  "jogos": 1,
  "vitorias": 1,
  "empates": 0,
  "derrotas": 0,
  "golsMarcados": 2,
  "golsSofridos": 0,
  "saldoGols": 2
}
```

**Respostas possíveis:**

* ✅ **201 Created** → Time adicionado com sucesso
* ❌ **400 Bad Request** → Dados inválidos (falha de validação pelo Joi)

---

### 🔹 PUT `/:sigla`

Atualiza os dados de um time existente.

**Exemplo:**

```
PUT /SAO
```

**Corpo da requisição (JSON):**

```json
{
  "pontos": 6,
  "vitorias": 2,
  "jogos": 2
}
```

**Respostas possíveis:**

* ✅ **200 OK** → Time atualizado com sucesso
* ❌ **400 Bad Request** → Algum campo inválido
* ❌ **404 Not Found** → Time não encontrado

---

### 🔹 DELETE `/:sigla`

Remove um time da tabela.

**Exemplo:**

```
DELETE /SPO
```

**Resposta:**

```json
{
  "nome": "Sport",
  "sigla": "SPO",
  "pontos": 0,
  "jogos": 0,
  "vitorias": 0,
  "empates": 0,
  "derrotas": 0,
  "golsMarcados": 0,
  "golsSofridos": 0,
  "saldoGols": 0
}
```

**Respostas possíveis:**

* ✅ **200 OK** → Time removido com sucesso
* ❌ **404 Not Found** → Sigla não encontrada

---

## 🧠 Validação de Dados (Joi)

A aplicação utiliza **Joi** para validar os dados recebidos nas rotas.

### 🏗️ Modelo de Criação (`modeloTime`)

Usado no `POST /`, exige todos os campos obrigatórios.

```js
const modeloTime = joi.object({
  nome: joi.string().min(3).required(),
  sigla: joi.string().length(3).required(),
  pontos: joi.number().min(0).default(0),
  jogos: joi.number().min(0).default(0),
  vitorias: joi.number().min(0).default(0),
  empates: joi.number().min(0).default(0),
  derrotas: joi.number().min(0).default(0),
  golsMarcados: joi.number().min(0).default(0),
  golsSofridos: joi.number().min(0).default(0),
  saldoGols: joi.number().min(0).default(0)
});
```

### 🔧 Modelo de Atualização (`modeloAtualizacaoTime`)

Usado no `PUT /:sigla`, permite atualizar apenas campos específicos.

```js
const modeloAtualizacaoTime = joi.object({
  nome: joi.string().min(3),
  sigla: joi.string().length(3),
  pontos: joi.number().min(0),
  jogos: joi.number().min(0),
  vitorias: joi.number().min(0),
  empates: joi.number().min(0),
  derrotas: joi.number().min(0),
  golsMarcados: joi.number().min(0),
  golsSofridos: joi.number().min(0),
  saldoGols: joi.number().min(0)
}).min(1);
```

---
