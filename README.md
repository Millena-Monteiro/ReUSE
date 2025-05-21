
# ♻️ ReUse+ API

## 🌎 Visão Geral do Projeto

O **ReUse+** é uma plataforma que promove **sustentabilidade, economia circular e consumo consciente**, conectando pessoas que desejam **doar, trocar ou reutilizar itens** que não usam mais. A proposta é simples, direta e com grande impacto: transformar o que seria lixo em oportunidade para outras pessoas.

Esse projeto nasceu da vontade de incentivar práticas sustentáveis, estimular a solidariedade e combater o desperdício, oferecendo uma solução prática e acessível.

---

## 🚀 Funcionalidades Principais

- 👤 Gestão de usuários: cadastro, login e controle dos perfis.
- 📦 Cadastro de itens: publicação de itens disponíveis para doação ou troca.
- 🔍 Filtros inteligentes: busca por categoria, estado e palavra-chave.
- ⭐ Sistema de favoritos: salva itens que você curtiu para visualizar depois.
- 🎁 Sistema de cupons: recompensas e pontuação por ações sustentáveis.
- 🕑 Histórico de transações: acompanhe todas as doações e trocas realizadas.
- 🌟 Avaliações: feedback entre usuários para fortalecer a confiança na plataforma.

---

## 📦 Estrutura de Rotas da API

### 🧑‍💻 Rotas de Usuários
| Método | Endpoint         | Descrição                  |
|--------|------------------|----------------------------|
| GET    | /api/usuarios    | Listar todos os usuários   |
| GET    | /api/usuarios/:id| Buscar usuário por ID      |
| POST   | /api/usuarios    | Criar novo usuário         |
| PUT    | /api/usuarios/:id| Atualizar dados do usuário |
| DELETE | /api/usuarios/:id| Deletar usuário            |

### 📦 Rotas de Itens
| Método | Endpoint        | Descrição                   |
|--------|-----------------|-----------------------------|
| GET    | /api/itens      | Listar todos os itens       |
| GET    | /api/itens/:id  | Buscar item por ID          |
| POST   | /api/itens      | Criar novo item             |
| PUT    | /api/itens/:id  | Atualizar dados do item     |
| DELETE | /api/itens/:id  | Deletar item                |

### ⭐ Rotas de Avaliações
| Método | Endpoint              | Descrição                      |
|--------|-----------------------|--------------------------------|
| GET    | /api/avaliacoes       | Listar todas as avaliações     |
| GET    | /api/avaliacoes/:id   | Buscar avaliação por ID        |
| POST   | /api/avaliacoes       | Criar nova avaliação           |
| PUT    | /api/avaliacoes/:id   | Atualizar avaliação            |
| DELETE | /api/avaliacoes/:id   | Deletar avaliação              |

### 🎁 Rotas de Cupons
| Método | Endpoint         | Descrição                  |
|--------|------------------|----------------------------|
| GET    | /api/cupons      | Listar todos os cupons     |
| GET    | /api/cupons/:id  | Buscar cupom por ID        |
| POST   | /api/cupons      | Criar novo cupom           |
| PUT    | /api/cupons/:id  | Atualizar dados do cupom   |
| DELETE | /api/cupons/:id  | Deletar cupom              |

### 🕑 Rotas de Histórico
| Método | Endpoint               | Descrição                     |
|--------|------------------------|-------------------------------|
| GET    | /api/historicos        | Listar todos os históricos    |
| POST   | /api/historicos        | Criar novo histórico          |
| PUT    | /api/historicos/:id    | Atualizar dados do histórico  |
| DELETE | /api/historicos/:id    | Deletar histórico             |

---

## 🔗 Organização das Rotas no Projeto

```
routes/
├── avaliacaoRoutes.js     # Rotas de avaliações
├── cupomRoutes.js         # Rotas de cupons
├── itemRoutes.js          # Rotas de itens
├── reuseRoutes.routes.js  # Rotas de histórico e gerais
└── userRoutes.js          # Rotas de usuários
```

---

## 💡 Por Que Usar o ReUse+?

- ✅ Praticidade para doar, trocar e buscar itens.
- ♻️ Foco total em sustentabilidade e consumo consciente.
- ⭐ Sistema de reputação, histórico e avaliação para segurança dos usuários.
- 🎯 Plataforma intuitiva, com recompensas e gamificação.

---

## 🚀 Próximos Passos

- 🔧 Implementar notificações em tempo real.
- 📲 Criar uma versão mobile.
- 🔥 Expandir o sistema de gamificação com desafios e rankings.

---

## 💚 Junte-se ao movimento!
Vamos transformar o mundo através da reutilização. Bora construir uma sociedade mais sustentável, inteligente e consciente! 🌍✨
