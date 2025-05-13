# Order Management System (Frontend)

Este é um projeto frontend para gerenciamento de pedidos, desenvolvido com **React + TypeScript** e estilizado com **Tailwind CSS**. A aplicação permite listar, criar e visualizar detalhes de pedidos. Atualmente, está configurada para usar dados **mockados**, mas pode ser facilmente conectada a uma API real.

## ✅ Funcionalidades

- Listagem de pedidos em tabela.
- Modal para criação de novo pedido.
- Visualização detalhada de cada pedido.
- Roteamento entre páginas com React Router.

---

## 🚀 Como Rodar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/order-management-frontend.git
cd order-management-frontend
```

###2. Instale as dependências
```bash
npm install
```
###3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em: http://localhost:5173 

##⚙️ Configuração de Fonte de Dados
Atualmente, o projeto está utilizando dados mockados (locais) para simular a API.

Para trocar para uma API real, edite o arquivo:

```ts
// src/services/orderService.ts
const mock = true; // << TROQUE PARA false para usar API real
```

> 🛠️ **Atenção:** Ao colocar `mock = false`, certifique-se de que a **API esteja ativa** e a **URL esteja correta** no `fetch`.



## 🧪 Tecnologias Usadas

- **React**
- **TypeScript**
- **Tailwind CSS**
- **React Router DOM**
- **Vite**


## 📌 Requisitos

- **Node.js**
- **npm** ou **yarn**

## 🔗 Repositório do Backend

A API que alimenta este projeto está disponível em:

[(https://github.com/seunome/OrderManagementAPI)](https://github.com/offmonte/OrderManagementSystem)