<template>
  <section class="w-full max-w-[1400px] mx-auto px-4 py-10 min-h-[75vh]">
    
    <!-- Cabeçalho -->
    <div class="text-center mb-10" data-aos="fade-up">
      <h1 class="font-['Pacifico'] text-4xl md:text-5xl text-white drop-shadow-md mb-3">
        Programação
      </h1>
      <p class="text-[#CCDCFF] text-sm md:text-base max-w-2xl mx-auto">
        Aplicações web fullstack, aplicativos mobile offline-first, sistemas em Java/C++, IoT e jogos desenvolvidos ao longo da minha trajetória.
      </p>
    </div>

    <!-- Botões de Filtro -->
    <div class="flex flex-wrap justify-center gap-3 mb-10" data-aos="fade-up">
      <button
        v-for="categoria in categorias"
        :key="categoria"
        @click="categoriaAtiva = categoria"
        :class="[
          'px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer border-2',
          categoriaAtiva === categoria
            ? 'bg-[#805EBF] text-white border-white shadow-lg scale-105'
            : 'bg-[#431259]/80 text-[#CCDCFF] border-[#805EBF]/60 hover:bg-[#511F73] hover:text-white'
        ]"
      >
        {{ categoria }}
      </button>
    </div>

    <!-- Grid  -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <article
        v-for="projeto in projetosFiltrados"
        :key="projeto.id"
        data-aos="fade-up"
        class="bg-white rounded-3xl border-2 border-[#805EBF]/30 shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <!-- Carrossel -->
        <div
          v-if="projeto.imagens && projeto.imagens.length"
          class="relative w-full h-72 md:h-80 bg-[#F5F3FF] overflow-hidden border-b border-gray-100 group"
        >
          <img
            :src="projeto.imagens[indicesAtuais[projeto.id] || 0]"
            alt=""
            aria-hidden="true"
            class="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-60"
          />

          <img
            :src="projeto.imagens[indicesAtuais[projeto.id] || 0]"
            :alt="projeto.titulo"
            class="relative z-10 w-full h-full object-contain transition-all duration-300"
          />

          <template v-if="projeto.imagens.length > 1">
            <button
              @click="fotoAnterior(projeto.id, projeto.imagens.length)"
              aria-label="Foto anterior"
              class="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-[#431259]/75 hover:bg-[#431259] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md cursor-pointer"
            >
              ‹
            </button>

            <button
              @click="proximaFoto(projeto.id, projeto.imagens.length)"
              aria-label="Próxima foto"
              class="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-[#431259]/75 hover:bg-[#431259] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md cursor-pointer"
            >
              ›
            </button>

            <div class="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-[#431259]/50 px-2.5 py-1 rounded-full">
              <button
                v-for="(_, index) in projeto.imagens"
                :key="index"
                @click="indicesAtuais[projeto.id] = index"
                :aria-label="`Ir para foto ${index + 1}`"
                :class="[
                  'w-2 h-2 rounded-full transition-all cursor-pointer',
                  (indicesAtuais[projeto.id] || 0) === index
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/80'
                ]"
              />
            </div>
          </template>
        </div>

        <!-- Conteúdo do Card -->
        <div class="p-6 md:p-7 flex flex-col flex-1 justify-between">
          <div>
            <!-- Badge da Categoria + Ano -->
            <div class="flex items-center justify-between gap-2 mb-3">
              <span
                :class="[
                  'text-xs font-bold px-3 py-1 rounded-full',
                  badgeCategoria(projeto.categoria)
                ]"
              >
                {{ projeto.categoria }}
              </span>
              <span class="text-xs font-semibold text-gray-400">
                {{ projeto.ano }}
              </span>
            </div>

            <!-- Título e Descrição -->
            <h2 class="text-xl font-bold text-[#431259] mb-2 leading-snug">
              {{ projeto.titulo }}
            </h2>
            <p class="text-gray-600 text-sm leading-relaxed mb-5">
              {{ projeto.descricao }}
            </p>

            <!-- Destaque -->
            <div v-if="projeto.destaque" class="bg-[#F5F3FF] border-l-4 border-[#805EBF] rounded-r-xl px-4 py-2.5 mb-5">
              <p class="text-xs text-[#431259] font-medium">
                <strong class="font-bold">Destaque:</strong> {{ projeto.destaque }}
              </p>
            </div>
          </div>

          <div>
            <!-- Tags de Tecnologias -->
            <div class="flex flex-wrap gap-2 mb-5">
              <span
                v-for="tech in projeto.tecnologias"
                :key="tech"
                class="text-xs font-semibold bg-gray-100 text-[#511F73] px-2.5 py-1 rounded-lg border border-gray-200"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Links de Ação -->
            <div
              v-if="projeto.linkDemo || projeto.linkRepo"
              class="flex flex-wrap gap-3 pt-4 border-t border-gray-100"
            >
              <a
                v-if="projeto.linkDemo"
                :href="projeto.linkDemo"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-[#511F73] hover:bg-[#431259] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors"
              >
                {{ projeto.labelDemo || 'Acessar Projeto' }}
                <span aria-hidden="true">↗</span>
              </a>

              <a
                v-if="projeto.linkRepo"
                :href="projeto.linkRepo"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#431259] border border-[#805EBF]/50 text-xs font-bold px-4 py-2.5 rounded-xl transition-colors"
              >
                Código no GitHub
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>

  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const categorias = ['Todos', 'Web & Fullstack', 'Mobile', 'Sistemas & Compiladores', 'Jogos & IoT'];
const categoriaAtiva = ref('Todos');

const indicesAtuais = ref({});

const proximaFoto = (id, total) => {
  const atual = indicesAtuais.value[id] || 0;
  indicesAtuais.value[id] = (atual + 1) % total;
};

const fotoAnterior = (id, total) => {
  const atual = indicesAtuais.value[id] || 0;
  indicesAtuais.value[id] = (atual - 1 + total) % total;
};

const badgeCategoria = (categoria) => {
  if (categoria === 'Web & Fullstack') return 'bg-[#431259] text-[#CCDCFF]';
  if (categoria === 'Mobile') return 'bg-[#805EBF] text-white';
  if (categoria === 'Sistemas & Compiladores') return 'bg-[#B3BEFF]/50 text-[#431259]';
  return 'bg-[#F3E8FF] text-[#60308C]';
};

const projetos = ref([
  {
    id: 1,
    titulo: 'CLIC — Dicionário Colaborativo de Libras',
    categoria: 'Web & Fullstack',
    ano: '2026',
    imagens: [],
    descricao:
      'Plataforma web colaborativa focada no mapeamento, registro e expansão de vocabulário técnico e científico em Libras para promover acessibilidade e inclusão.',
    destaque: 'Projeto em produção (cliclibras.tech) na fase de coleta e validação de sinais junto à comunidade surda.',
    tecnologias: ['Java', 'Spring Boot', 'Vue.js', 'PostgreSQL', 'Google Cloud'],
    linkDemo: 'https://cliclibras.tech',
    labelDemo: 'Acessar Plataforma',
    linkRepo: '',
  },
  {
    id: 2,
    titulo: 'IFSearch — App de Pesquisa Offline',
    categoria: 'Mobile',
    ano: '2026',
    imagens: [],
    descricao:
      'Aplicativo mobile cross-platform offline-first desenvolvido para coleta estruturada de pesquisas em campo, com sincronização em nuvem e prevenção de duplicidades via UUID.',
    destaque: 'Utilizado em campo na 9ª Edição do Festival de Gastronomia e Cultura de Aracati.',
    tecnologias: ['Flutter', 'Dart', 'SQLite', 'Supabase', 'Google Sheets'],
    linkDemo: '',
    linkRepo: 'https://github.com/Grizzlyess/ifsearch',
  },
  {
    id: 3,
    titulo: 'FastBuy — Gestão de Estoque e Vendas',
    categoria: 'Mobile',
    ano: '2026',
    imagens: [],
    descricao:
      'Aplicativo mobile voltado para pequenos negócios gerenciarem estoque, frente de caixa (PDV), histórico de transações e atualização automática de produtos.',
    destaque: 'Fluxo completo de vendas, controle de inventário e perfil personalizável.',
    tecnologias: ['Flutter', 'Dart', 'Mobile', 'PDV'],
    linkDemo: '',
    linkRepo: 'https://github.com/Grizzlyess/FastBuy',
  },
  {
    id: 4,
    titulo: 'Cidadela — Catálogo Rick and Morty',
    categoria: 'Web & Fullstack',
    ano: '2026',
    imagens: [],
    descricao:
      'Aplicação web de catálogo interativo de personagens consumindo a Rick and Morty API, com persistência de dados e deploy em nuvem.',
    destaque: 'Integração completa de backend em Java Spring Boot com banco PostgreSQL.',
    tecnologias: ['Java', 'Spring Boot', 'PostgreSQL', 'API REST', 'Render'],
    linkDemo: 'https://cidadela-39su.onrender.com/',
    linkRepo: 'https://github.com/Grizzlyess/cidadela',
  },
  {
    id: 5,
    titulo: 'My-Compiler — Compilador e Interpretador em C++',
    categoria: 'Sistemas & Compiladores',
    ano: '2025',
    imagens: [],
    descricao:
      'Compilador e interpretador baseado em Árvore Sintática Abstrata (AST) desenvolvido em C++ para análise léxica, sintática e execução de uma linguagem própria.',
    destaque: 'Implementação do zero utilizando Flex e Bison com arquitetura de AST.',
    tecnologias: ['C++', 'Flex', 'Bison', 'Compiladores', 'AST'],
    linkDemo: '',
    linkRepo: 'https://github.com/Grizzlyess/My-Compiler',
  },
  {
    id: 6,
    titulo: 'Beartales — Jogo 2D Estilo Sokoban',
    categoria: 'Jogos & IoT',
    ano: '2025',
    imagens: [],
    descricao:
      'Jogo 2D de quebra-cabeça (puzzle) estilo Sokoban desenvolvido em Python, com lógica de fases, movimentação em grade e interface gráfica própria.',
    destaque: 'Publicado na web via GitHub Pages para jogar direto no navegador.',
    tecnologias: ['Python', 'Pygame', 'Game Dev', '2D'],
    linkDemo: 'https://grizzlyess.github.io/beartales-jogo/',
    linkRepo: 'https://github.com/Grizzlyess/Beartales',
  },
  {
    id: 7,
    titulo: 'CAPI — Plataforma de Sustentabilidade',
    categoria: 'Web & Fullstack',
    ano: '2024',
    imagens: [],
    descricao:
      'Plataforma web voltada para sustentabilidade com calculadora de pegada de carbono, diretório de empresas SBTi e consulta de Eco-Score via Open Food Facts.',
    destaque: 'Validada em testes de usabilidade com pontuação 74.09 na escala SUS.',
    tecnologias: ['TypeScript', 'Web Fullstack', 'APIs REST', 'UX'],
    linkDemo: 'https://grizzlyess.github.io/Capi_JS/#/',
    linkRepo: 'https://github.com/Grizzlyess/Capi_JS',
  },
  {
    id: 8,
    titulo: 'Pavlov’s Cat — Alimentador IoT via Telegram',
    categoria: 'Jogos & IoT',
    ano: '2024',
    imagens: [],
    descricao:
      'Protótipo de Internet das Coisas que conecta um microcontrolador ESP8266/ESP32 ao Telegram para treinar um gato: ao tocar uma melodia específica, o dispositivo libera ração.',
    destaque: 'Integração de hardware, eletrônica e bot do Telegram em C++.',
    tecnologias: ['C++', 'ESP8266', 'IoT', 'Telegram Bot'],
    linkDemo: '',
    linkRepo: 'https://github.com/Grizzlyess/Pavlov-s-cat-with-IoT',
  },
  {
    id: 9,
    titulo: 'Condado — Sistema de Livraria em Java',
    categoria: 'Sistemas & Compiladores',
    ano: '2023',
    imagens: [],
    descricao:
      'Sistema de gerenciamento de livraria desenvolvido em Java, aplicando princípios de Programação Orientada a Objetos, modelagem de domínio e regras de negócio.',
    destaque: 'Estruturação limpa em Java focada em boas práticas de POO.',
    tecnologias: ['Java', 'POO', 'Backend'],
    linkDemo: '',
    linkRepo: 'https://github.com/Grizzlyess/Condado',
  },
]);

const projetosFiltrados = computed(() => {
  if (categoriaAtiva.value === 'Todos') {
    return projetos.value;
  }
  return projetos.value.filter((p) => p.categoria === categoriaAtiva.value);
});
</script>