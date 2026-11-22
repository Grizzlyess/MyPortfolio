<template>
  <section class="w-full max-w-[1400px] mx-auto px-4 py-10 min-h-[75vh]">
    
    <!-- Cabeçalho -->
    <div class="text-center mb-10" data-aos="fade-up">
      <h1 class="font-['Pacifico'] text-4xl md:text-5xl text-white drop-shadow-md mb-3">
        Dados &amp; IA
      </h1>
      <p class="text-[#CCDCFF] text-sm md:text-base max-w-2xl mx-auto">
        Projetos de Machine Learning, inteligência artificial, análise exploratória e dashboards interativos voltados para tomada de decisão.
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

    <!-- Projetos -->
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
          <!-- Fundo -->
          <img
            :src="projeto.imagens[indicesAtuais[projeto.id] || 0]"
            alt=""
            aria-hidden="true"
            class="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-60"
          />

          <!-- Foto principal inteira -->
          <img
            :src="projeto.imagens[indicesAtuais[projeto.id] || 0]"
            :alt="projeto.titulo"
            class="relative z-10 w-full h-full object-contain transition-all duration-300"
          />

          <!-- Setas -->
          <template v-if="projeto.imagens.length > 1">
            <button
              @click="fotoAnterior(projeto.id, projeto.imagens.length)"
              aria-label="Foto anterior"
              class="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-[#431259]/75 hover:bg-[#431259] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-opacity cursor-pointer"
            >
              ‹
            </button>

            <button
              @click="proximaFoto(projeto.id, projeto.imagens.length)"
              aria-label="Próxima foto"
              class="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-[#431259]/75 hover:bg-[#431259] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-opacity cursor-pointer"
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

        <!-- Card -->
        <div class="p-6 md:p-7 flex flex-col flex-1 justify-between">
          <div>

            <div class="flex items-center justify-between gap-2 mb-3">
              <span
                :class="[
                  'text-xs font-bold px-3 py-1 rounded-full',
                  projeto.categoria === 'Machine Learning'
                    ? 'bg-[#431259] text-[#CCDCFF]'
                    : 'bg-[#B3BEFF]/40 text-[#431259]'
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

            <!--  Resultado -->
            <div v-if="projeto.destaque" class="bg-[#F5F3FF] border-l-4 border-[#805EBF] rounded-r-xl px-4 py-2.5 mb-5">
              <p class="text-xs text-[#431259] font-medium">
                <strong class="font-bold">Destaque:</strong> {{ projeto.destaque }}
              </p>
            </div>
          </div>

          <div>
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-5">
              <span
                v-for="tech in projeto.tecnologias"
                :key="tech"
                class="text-xs font-semibold bg-gray-100 text-[#511F73] px-2.5 py-1 rounded-lg border border-gray-200"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Links -->
            <div
              v-if="projeto.linkDemo || projeto.linkPdf || projeto.linkRepo || projeto.statusBreve"
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
                v-if="projeto.linkPdf"
                :href="projeto.linkPdf"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-[#805EBF] hover:bg-[#60308C] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors"
              >
                {{ projeto.labelPdf || 'Ver Relatório (PDF)' }}
                <span aria-hidden="true">📄</span>
              </a>

              <span
                v-if="projeto.statusBreve"
                class="inline-flex items-center gap-2 bg-[#F5F3FF] text-[#805EBF] border border-[#805EBF]/40 text-xs font-bold px-4 py-2.5 rounded-xl cursor-default"
              >
                ⏳ {{ projeto.statusBreve }}
              </span>

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


// Festival 2024
import fest24_0 from '../assets/festival2024/0.png';
import fest24_1 from '../assets/festival2024/1.jpg';
import fest24_2 from '../assets/festival2024/2.jpg';

// Festival 2025
import fest25_0 from '../assets/festival2025/0.png';
import fest25_1 from '../assets/festival2025/1.jpg';
import fest25_2 from '../assets/festival2025/2.jpg';
import fest25_3 from '../assets/festival2025/3.jpg';
import fest25_4 from '../assets/festival2025/4.jpg';

// Festival 2026
import fest26_1 from '../assets/festival2026/1.jpg';
import fest26_2 from '../assets/festival2026/2.jpg';
import fest26_3 from '../assets/festival2026/3.jpg';
import fest26_4 from '../assets/festival2026/4.jpg';

import chega from '../assets/CHEGAMAIS.png';

const categorias = ['Todos', 'Machine Learning', 'Análise & BI'];
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

const projetos = ref([
  {
    id: 1,
    titulo: 'Previsão de Preços de Veículos',
    categoria: 'Machine Learning',
    ano: '2026',
    imagens: [],
    descricao:
      'Aplicação web de Machine Learning que estima o valor de mercado de carros a partir de características técnicas, integrando pipeline de pré-processamento e modelo preditivo em produção.',
    destaque: 'Modelo treinado com RandomForestRegressor servido via aplicação web em Django.',
    tecnologias: ['Python', 'Scikit-Learn', 'Pandas', 'Django', 'Render'],
    linkDemo: 'https://car-price-prediction-app-3iww.onrender.com',
    labelDemo: 'Testar Aplicação',
    linkPdf: '',
    linkRepo: 'https://github.com/Grizzlyess',
  },
  {
    id: 2,
    titulo: 'Portal de Egressos — Projeto Inova IFCE',
    categoria: 'Análise & BI',
    ano: '2024',
    imagens: [],
    descricao:
      'Pipeline de integração e tratamento de registros acadêmicos (2009–2023) cruzados com bases públicas da RAIS, CBO e IBGE para analisar trajetória acadêmica e inserção no mercado de trabalho formal.',
    destaque: 'Base analítica que fundamentou pesquisas publicadas e premiadas na SBC.',
    tecnologias: ['Tableau Prep', 'Tableau Desktop', 'RAIS / IBGE', 'ETL', 'BI'],
    linkDemo: 'https://egressos.ifce.edu.br',
    labelDemo: 'Ver Portal',
    linkPdf: '',
    linkRepo: '',
  },
  {
    id: 3,
    titulo: 'Chega+ — Predição de Churn com IA',
    categoria: 'Machine Learning',
    ano: '2026',
    imagens: [chega],
    descricao:
      'Solução orientada por inteligência artificial desenvolvida no HackPagTalent para classificar o perfil de clientes e prever risco de cancelamento (churn), apoiando ações preventivas de retenção.',
    destaque: 'Arquitetura de classificação dupla (perfil + risco de churn) focada em negócio.',
    tecnologias: ['Python', 'IA / ML', 'Classificação', 'Análise de Churn'],
    linkDemo: '',
    linkPdf: 'https://drive.google.com/file/d/1y3nHMvs57lqdzuUPnVJAs6HchNHfXWXl/view?usp=sharing',
    labelPdf: 'Ver Apresentação',
    linkRepo: '',
  },
  {
    id: 4,
    titulo: 'Festival de Gastronomia e Cultura de Aracati (2026)',
    categoria: 'Análise & BI',
    ano: '2026',
    imagens: [fest26_1, fest26_2, fest26_3, fest26_4],
    descricao:
      'Coleta estruturada em campo realizada com aplicativo offline-first (Flutter + SQLite/Supabase) durante a 9ª edição do festival. Os dados coletados junto a expositores e visitantes estão em fase de tratamento e análise.',
    destaque: 'Coleta de campo concluída — relatório final e dashboards em produção.',
    tecnologias: ['Flutter', 'Supabase', 'Google Sheets', 'Análise de Dados', 'BI'],
    linkDemo: '',
    linkPdf: '',
    statusBreve: 'Resultados em breve',
    linkRepo: '',
  },
  {
    id: 5,
    titulo: 'Festival de Gastronomia e Cultura de Aracati (2025)',
    categoria: 'Análise & BI',
    ano: '2025',
    imagens: [fest25_0, fest25_1, fest25_2, fest25_3, fest25_4],
    descricao:
      'Tratamento e análise estatística das pesquisas aplicadas durante a 7ª edição do festival, gerando painéis visuais para avaliar perfil do público, satisfação e impacto econômico local.',
    destaque: 'Mais de 620 respondentes analisados (103 expositores e 518 visitantes) em dashboards no Tableau.',
    tecnologias: ['Tableau', 'Google Sheets', 'Estatística', 'Visualização de Dados'],
    linkDemo: '',
    linkPdf: 'https://drive.google.com/file/d/1cADkRrZ7vv4EenqtHPUjRwTR_sADfL6T/view?usp=sharing',
    labelPdf: 'Ver Relatório',
    linkRepo: '',
  },
  {
    id: 6,
    titulo: 'Festival de Gastronomia e Cultura de Aracati (2024)',
    categoria: 'Análise & BI',
    ano: '2024',
    imagens: [fest24_0, fest24_1, fest24_2],
    descricao:
      'Levantamento e análise quantitativa e qualitativa dos dados coletados junto a expositores e visitantes pelo Projeto DIVAS (IFCE), apoiando o diagnóstico cultural e econômico do evento.',
    destaque: 'Base histórica utilizada para comparação de evolução entre as edições do festival.',
    tecnologias: ['Análise Quantitativa', 'Análise Qualitativa', 'Planilhas', 'BI'],
    linkDemo: '',
    linkPdf: 'https://drive.google.com/file/d/1S_xuwdsDCZDaSdkkSqWWD6PFinM88k0c/view?usp=sharing',
    labelPdf: 'Ver Relatório',
    linkRepo: '',
  },
]);

const projetosFiltrados = computed(() => {
  if (categoriaAtiva.value === 'Todos') {
    return projetos.value;
  }
  return projetos.value.filter((p) => p.categoria === categoriaAtiva.value);
});
</script>