# Projeto de Automação de Testes com Cypress

Este projeto utiliza **Cypress** para automação de testes end-to-end (E2E), aplicando boas práticas como **Page Objects**, uso de **dados dinâmicos com Faker** e organização por **constants**.

---

## 📌 Pré-requisitos

- Node.js (versão 18 ou superior)
- NPM ou Yarn
- Git

---

## 📦 Instalação do Projeto

1. Clone o repositório:
```bash
git clone https://github.com/nati-br/Projeto_Cypress.git
```

2. Acesse a pasta do projeto:
```bash
cd projeto-cypress
```

3. Instale as dependências:
```bash
npm init -y
```

---

```bash
npm install cypress --save-dev
```

---
## ▶️ Executando os testes

### Abrir o Cypress Runner
```bash
npx cypress open
```

### Executar em modo headless
```bash
npx cypress run
```

---

## 🗂️ Estrutura do Projeto

```
cypress/
 ├── e2e/
 │   ├── login.cy.js
 │   └── cadastro_usuario.cy.js
 ├── support/
 │   ├── pages/
 │   │   ├── cadastro_usuario_page.js
 │   │   ├── login_usuario_page.js
 │   │   └── commum_page.js
 │   ├── constants/
 │   │   └── mensagens_cadastro.js
 │   │   └── mensagens_login.js
 │   ├── commands.js
 │   └── e2e.js
```

---

## 🧪 Boas práticas aplicadas

- Page Object Pattern
- Dados dinâmicos com Faker
- Evitar texto hardcoded
- Separação de responsabilidades
- Seletores estáveis

---

## 🚀 Tecnologias

- Cypress
- JavaScript
- Faker
- Node.js

---

## 📘 Observação

Este projeto pode ser facilmente refatorado para **Cypress Commands**, reduzindo acoplamento e melhorando a legibilidade.