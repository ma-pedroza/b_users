# B-users

Aplicação SPA desenvolvida com Vue 2 consumindo a API pública JSONPlaceholder para simular um sistema completo de gerenciamento de usuários, posts, álbuns e tarefas.

---

<img width="1911" height="1057" alt="image" src="https://github.com/user-attachments/assets/6d4c653f-7113-4ead-8375-18edf55be445" />
<img width="1918" height="1058" alt="image" src="https://github.com/user-attachments/assets/86346c47-baa7-4a09-bfcb-3ed2e2aceefc" />



## ✨ Funcionalidades

- 🔐 Autenticação com login e registro
- 🛡 Guard de rotas (`requireAuth`)
- 👥 Gerenciamento de usuários
  - Listagem em tabela
  - Visualização em cards
  - Criação
  - Edição
  - Detalhamento
- 📝 Feed de posts
- 📸 Sistema de álbuns
  - Visualização de fotos
  - Favoritar álbuns
- ✅ Gerenciamento de tarefas (To-Dos)
- 👤 Página de perfil
- 🌙 Tema claro/escuro
- 📱 Layout responsivo

---

## 🛠 Stack Utilizada

| Camada | Tecnologia |
|---|---|
| Framework | Vue 2.6 |
| State Management | Vuex 3 |
| Roteamento | Vue Router 3 |
| HTTP Client | Axios |
| UI Components | Element UI 2 |
| Estilização | Tailwind CSS 3 + SCSS |
| Build Tool | Vue CLI 5 |

## 🌐 APIs Consumidas

### JSONPlaceholder

Base URL:

```txt
https://jsonplaceholder.typicode.com
```

### Picsum Photos

Imagens aleatórias para os álbuns:

```txt
https://picsum.photos/300/280?random={id}
```

---

### Pravatar

Avatares dos usuários:

```txt
https://i.pravatar.cc/150?img={userId}
```

---
---

## 🚀 Instalação

Clone o projeto:

```bash
git clone <url-do-repositorio>
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run serve
```

---

## 👨‍💻 Autor

Desenvolvido por Matheus Pedroza.
