# Maria Clara Dev | Portfólio Pessoal

[Visite o Site](https://mariaclarab.com.br/)

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)

Portfólio pessoal desenvolvido em **Vue 3**, **TypeScript** e **Tailwind CSS** para reunir minha trajetória em Desenvolvimento Fullstack, Ciência de Dados & IA, Pesquisa Científica e Extensão Universitária.

---

## Funcionalidades

- **Barra de Navegação Inteligente:** Inspirada em grandes plataformas de e-commerce, conta com **busca em tempo real** filtrável por categoria (*Todos*, *Skills*, *Projetos* e *Eventos*) e menu lateral responsivo (*drawer*).
- **Páginas Dedicadas com Filtros Reativos:**
  - **Início (`/`):** Apresentação, Experiência, Formação, Artigos Publicados, Serviços, Projetos Recentes e Contato.
  - **Programação (`/programacao`):** Projetos categorizados em *Web & Fullstack*, *Mobile*, *Sistemas & Compiladores* e *Jogos & IoT*.
  - **Dados & IA (`/dados`):** Projetos de *Machine Learning* e *Análise & BI*, incluindo relatórios interativos e dashboards.
  - **Pesquisa & Extensão (`/eventos`):** Artigos publicados na SBC, eventos de tecnologia, oficinas de inclusão digital e projetos de extensão.
- **Carrossel de Imagens nos Cards:** Visualização de fotos de eventos, protótipos e dashboards com fundo desfocado (*blur*) e navegação por setas/indicadores.
- **Contato Facilitado:** Formulário integrado ao **Formspree** para envio direto de mensagens e botão de **cópia rápida de e-mail** com feedback visual.
- **Scroll Suave & Responsividade:** Navegação fluida entre seções da página inicial via Vue Router (`scrollBehavior`) e layout adaptado para desktop e mobile.

---

## Tecnologias Utilizadas

- **Framework:** [Vue 3](https://vuejs.org/) (`<script setup>`)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Roteamento:** [Vue Router](https://router.vuejs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Formulário de Contato:** [Formspree](https://formspree.io/)
- **Deploy:** [Cloudflare Pages](https://pages.cloudflare.com/)

---

## Estrutura do Projeto

```bash
MyPortfolio/
├── public/
│   └── resume.pdf            # Currículo disponível para download
├── src/
│   ├── assets/               # Imagens, ícones e fotos de eventos/projetos
│   ├── components/           # Componentes reutilizáveis (NavBar, Hero, ContactMe, Footer...)
│   ├── data/
│   │   └── busca.ts          # Índice centralizado de busca (skills, projetos e eventos)
│   ├── router/
│   │   └── index.ts          # Configuração de rotas e scroll suave
│   ├── views/
│   │   ├── HomeView.vue      # Página inicial
│   │   ├── ProgramacaoView.vue
│   │   ├── DadosView.vue
│   │   └── EventosView.vue   # Pesquisa & Extensão
│   ├── App.vue
│   └── main.ts
├── index.html
├── package.json
└── vite.config.ts
