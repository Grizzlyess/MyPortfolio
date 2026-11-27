<template>
  <section class="w-full max-w-[1400px] mx-auto px-4 py-10 min-h-[75vh]">
    
    <!-- Cabeçalho -->
    <div class="text-center mb-10" data-aos="fade-up">
      <h1 class="font-['Pacifico'] text-4xl md:text-5xl text-white drop-shadow-md mb-3">
        Pesquisa &amp; Extensão
      </h1>
      <p class="text-[#CCDCFF] text-sm md:text-base max-w-2xl mx-auto">
        Artigos científicos publicados, projetos de extensão universitária, oficinas de inclusão digital e participações em congressos e feiras de tecnologia.
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

    <!-- Grid de Itens -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <article
        v-for="item in itensFiltrados"
        :key="item.id"
        data-aos="fade-up"
        class="bg-white rounded-3xl border-2 border-[#805EBF]/30 shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <!-- Carrossel (aparece automaticamente quando adicionar fotos) -->
        <div
          v-if="item.imagens && item.imagens.length"
          class="relative w-full h-72 md:h-80 bg-[#F5F3FF] overflow-hidden border-b border-gray-100 group"
        >
          <img
            :src="item.imagens[indicesAtuais[item.id] || 0]"
            alt=""
            aria-hidden="true"
            class="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-60"
          />

          <img
            :src="item.imagens[indicesAtuais[item.id] || 0]"
            :alt="item.titulo"
            class="relative z-10 w-full h-full object-contain transition-all duration-300"
          />

          <template v-if="item.imagens.length > 1">
            <button
              @click="fotoAnterior(item.id, item.imagens.length)"
              aria-label="Foto anterior"
              class="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-[#431259]/75 hover:bg-[#431259] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md cursor-pointer"
            >
              ‹
            </button>

            <button
              @click="proximaFoto(item.id, item.imagens.length)"
              aria-label="Próxima foto"
              class="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-[#431259]/75 hover:bg-[#431259] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md cursor-pointer"
            >
              ›
            </button>

            <div class="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-[#431259]/50 px-2.5 py-1 rounded-full">
              <button
                v-for="(_, index) in item.imagens"
                :key="index"
                @click="indicesAtuais[item.id] = index"
                :aria-label="`Ir para foto ${index + 1}`"
                :class="[
                  'w-2 h-2 rounded-full transition-all cursor-pointer',
                  (indicesAtuais[item.id] || 0) === index
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
            <!-- Badge da Categoria + Local/Ano -->
            <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span
                :class="[
                  'text-xs font-bold px-3 py-1 rounded-full',
                  badgeCategoria(item.categoria)
                ]"
              >
                {{ item.categoria }}
              </span>
              <span class="text-xs font-semibold text-gray-400">
                {{ item.local ? `${item.local} • ` : '' }}{{ item.ano }}
              </span>
            </div>

            <!-- Título e Descrição -->
            <h2 class="text-xl font-bold text-[#431259] mb-2 leading-snug">
              {{ item.titulo }}
            </h2>
            <p class="text-gray-600 text-sm leading-relaxed mb-5">
              {{ item.descricao }}
            </p>

            <!-- Destaque / Premiação -->
            <div v-if="item.destaque" class="bg-[#F5F3FF] border-l-4 border-[#805EBF] rounded-r-xl px-4 py-2.5 mb-5">
              <p class="text-xs text-[#431259] font-medium">
                <strong class="font-bold">Destaque:</strong> {{ item.destaque }}
              </p>
            </div>
          </div>

          <div>
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-5">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="text-xs font-semibold bg-gray-100 text-[#511F73] px-2.5 py-1 rounded-lg border border-gray-200"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Links de Ação -->
            <div
              v-if="item.linkPrincipal || item.linkSecundario"
              class="flex flex-wrap gap-3 pt-4 border-t border-gray-100"
            >
              <a
                v-if="item.linkPrincipal"
                :href="item.linkPrincipal"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-[#511F73] hover:bg-[#431259] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors"
              >
                {{ item.labelPrincipal || 'Acessar' }}
                <span aria-hidden="true">↗</span>
              </a>

              <a
                v-if="item.linkSecundario"
                :href="item.linkSecundario"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#431259] border border-[#805EBF]/50 text-xs font-bold px-4 py-2.5 rounded-xl transition-colors"
              >
                {{ item.labelSecundario || 'Saiba Mais' }}
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

// Conecta
import conecta1 from '../assets/conecta/1.png';
import conecta2 from '../assets/conecta/2.jpeg';
import conecta3 from '../assets/conecta/3.jpeg';
import conecta4 from '../assets/conecta/4.jpeg';

// ERBASE
import erbase1 from '../assets/erbase/1.jpeg';
import erbase2 from '../assets/erbase/2.jpeg';
import erbase3 from '../assets/erbase/3.jpeg';
import erbase4 from '../assets/erbase/4.jpeg';

// ERI-ES
import eri1 from '../assets/eri/1.png';
import eri2 from '../assets/eri/2.jpeg';
import eri3 from '../assets/eri/3.jpeg';
import eri4 from '../assets/eri/4.jpeg';
import eri5 from '../assets/eri/5.jpeg';

// FESOL
import fesol1 from '../assets/fesol/1.jpeg';
import fesol2 from '../assets/fesol/2.jpeg';
import fesol3 from '../assets/fesol/3.jpeg';
import fesol4 from '../assets/fesol/4.jpeg';

// Fórum da Extensão
import forum1 from '../assets/forum/1.jpeg';
import forum2 from '../assets/forum/2.jpeg';
import forum3 from '../assets/forum/3.jpeg';
import forum4 from '../assets/forum/4.jpeg';

// Jornada da Educação
import jornada1 from '../assets/jornada/1.jpeg';
import jornada2 from '../assets/jornada/2.jpeg';
import jornada3 from '../assets/jornada/3.jpeg';

// Partiu IF
import partiuif1 from '../assets/partiuif/1.jpeg';
import partiuif2 from '../assets/partiuif/2.jpeg';
import partiuif3 from '../assets/partiuif/3.jpeg';
import partiuif4 from '../assets/partiuif/4.jpeg';
import partiuif5 from '../assets/partiuif/5.jpeg';

// Siará Tech Summit (STS)
import sts1 from '../assets/sts/1.jpg';
import sts2 from '../assets/sts/2.jpg';
import sts3 from '../assets/sts/3.jpg';
import sts4 from '../assets/sts/4.jpg';

const categorias = ['Todos', 'Pesquisa & Artigos', 'Extensão & Ensino', 'Eventos & Feiras'];
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
  if (categoria === 'Pesquisa & Artigos') return 'bg-[#431259] text-[#CCDCFF]';
  if (categoria === 'Extensão & Ensino') return 'bg-[#805EBF] text-white';
  return 'bg-[#B3BEFF]/50 text-[#431259]';
};

const itens = ref([
  {
    id: 1,
    titulo: 'WEIBASE / ERBASE 2026 — Artigo Publicado na SBC',
    categoria: 'Pesquisa & Artigos',
    local: 'Maragogi - AL',
    ano: '2026',
    imagens: [erbase1, erbase2, erbase3, erbase4],
    descricao:
      'Apresentação presencial e publicação nos anais da SBC do artigo sobre a empregabilidade e inserção no mercado de trabalho formal de formandos dos cursos de TIC do IFCE por Regiões Geográficas Imediatas.',
    destaque: 'Artigo publicado na SBC OpenLib e apresentado presencialmente em Alagoas.',
    tags: ['SBC', 'ERBASE 2026', 'Ciência de Dados', 'RAIS', 'Empregabilidade'],
    linkPrincipal: 'https://sol.sbc.org.br/index.php/erbase/article/view/46312',
    labelPrincipal: 'Ler Artigo na SBC OpenLib',
    linkSecundario: '',
  },
  {
    id: 2,
    titulo: 'ERI-ES 2025 — Melhor Artigo (Best Paper)',
    categoria: 'Pesquisa & Artigos',
    local: 'Vitória - ES',
    ano: '2025',
    imagens: [eri1, eri2, eri3, eri4, eri5],
    descricao:
      'Apresentação do artigo "Evasão Acadêmica e Empregabilidade: a influência do tempo de permanência na inserção profissional de egressos dos cursos de TIC do IFCE" na Escola Regional de Informática do Espírito Santo.',
    destaque: '🏆 Premiado como Melhor Artigo (Best Paper) do evento.',
    tags: ['Best Paper', 'SBC', 'ERI-ES 2025', 'Análise de Dados'],
    linkPrincipal: 'https://sol.sbc.org.br/index.php/eries/article/view/38235',
    labelPrincipal: 'Ler Artigo na SBC OpenLib',
    linkSecundario: '',
  },
  {
    id: 3,
    titulo: 'Siará Tech Summit (STS 2026)',
    categoria: 'Eventos & Feiras',
    local: 'Fortaleza - CE',
    ano: '2026',
    imagens: [sts1, sts2, sts3, sts4],
    descricao:
      'Exposição da startup CLIC (plataforma colaborativa de dicionários técnicos em Libras) e participação em rodadas de negócios corporativas no maior evento de inovação e tecnologia do Ceará.',
    destaque: 'Conexão direta com empresas e parceiros em rodadas de negócios.',
    tags: ['STS 2026', 'CLIC', 'Rodadas de Negócios', 'Inovação'],
    linkPrincipal: 'https://cliclibras.tech',
    labelPrincipal: 'Acessar CLIC',
    linkSecundario: '',
  },
  {
    id: 4,
    titulo: 'IV Fórum da Extensão do IFCE',
    categoria: 'Eventos & Feiras',
    local: 'Boa Viagem & Tauá - CE',
    ano: '2026',
    imagens: [forum1, forum2, forum3, forum4],
    descricao:
      'Apresentação dos avanços da plataforma CLIC e das ações de acessibilidade linguística desenvolvidas no IFCE Campus Aracati, trocando experiências com projetos de extensão de todo o estado.',
    destaque: 'Plataforma no ar em cliclibras.tech em fase ativa de coleta e validação de sinais.',
    tags: ['Extensão', 'CLIC', 'Libras', 'IFCE'],
    linkPrincipal: 'https://cliclibras.tech',
    labelPrincipal: 'Acessar CLIC',
    linkSecundario: '',
  },
  {
    id: 5,
    titulo: 'V Jornada da Educação',
    categoria: 'Eventos & Feiras',
    local: 'Ceará',
    ano: '2026',
    imagens: [jornada1, jornada2, jornada3],
    descricao:
      'Apresentação do projeto CLIC voltada para educadores e pesquisadores, destacando o papel da tecnologia na expansão do vocabulário técnico e científico em Libras no ambiente escolar e acadêmico.',
    destaque: 'Diálogo direto com professores sobre inclusão e acessibilidade no ensino.',
    tags: ['Educação', 'CLIC', 'Acessibilidade', 'Libras'],
    linkPrincipal: 'https://cliclibras.tech',
    labelPrincipal: 'Acessar CLIC',
    linkSecundario: '',
  },
  {
    id: 6,
    titulo: 'FESOL — Festival de Software Livre',
    categoria: 'Eventos & Feiras',
    local: 'IFCE Campus Aracati',
    ano: '2025',
    imagens: [fesol1, fesol2, fesol3, fesol4],
    descricao:
      'Participação no FESOL, evento voltado à difusão da cultura de código aberto, compartilhamento de conhecimento técnico e integração da comunidade acadêmica e de tecnologia.',
    destaque: 'Troca de experiências, palestras e incentivo ao uso de tecnologias livres.',
    tags: ['FESOL', 'Software Livre', 'Comunidade Tech', 'IFCE'],
    linkPrincipal: '',
    linkSecundario: '',
  },
  {
    id: 7,
    titulo: 'Projeto CONECTA — Inclusão Digital para Adultos',
    categoria: 'Extensão & Ensino',
    local: 'IFCE Campus Aracati',
    ano: '2026',
    imagens: [conecta1, conecta2, conecta3, conecta4],
    descricao:
      'Organização e docência de curso presencial de informática básica com 8 semanas de duração para adultos de 18 a 55 anos no laboratório LEMA, encerrado com exposição de projetos e entrega de certificados.',
    destaque: 'Edição única focada em autonomia digital, produtividade e letramento tecnológico.',
    tags: ['Inclusão Digital', 'Docência', 'Extensão', 'IFCE'],
    linkPrincipal: '',
    linkSecundario: '',
  },
  {
    id: 10,
    titulo: 'Partiu IF — Monitoria de Matemática',
    categoria: 'Extensão & Ensino',
    local: 'IFCE Campus Aracati',
    ano: '2025 – 2026',
    imagens: [partiuif1, partiuif2, partiuif3, partiuif4, partiuif5],
    descricao:
      'Monitoria de Matemática no programa preparatório Partiu IF, com criação de aulas gamificadas, quizzes interativos e acompanhamento próximo de estudantes do 9º ano.',
    destaque: 'Oradora representante dos monitores na cerimônia de encerramento.',
    tags: ['Ensino', 'Matemática', 'Gamificação', 'Monitoria'],
    linkPrincipal: '',
    linkSecundario: '',
  },
  {
    id: 8,
    titulo: 'Projeto DIVAS — Mulheres na Computação',
    categoria: 'Extensão & Ensino',
    local: 'IFCE Campus Aracati',
    ano: '2025 – 2026',
    imagens: [],
    descricao:
      'Atuação como extensionista incentivando a participação feminina nas áreas de computação e tecnologia, além da realização de oficinas de letramento digital e levantamentos de dados em eventos locais.',
    destaque: 'Ações contínuas de diversidade, representatividade e impacto comunitário.',
    tags: ['Mulheres na TI', 'Extensão', 'Letramento Digital', 'IFCE'],
    linkPrincipal: '',
    linkSecundario: '',
  },
  {
    id: 9,
    titulo: 'SinalizaTech — Glossário de TIC em Libras',
    categoria: 'Extensão & Ensino',
    local: 'IFCE Campus Aracati',
    ano: '2025 – 2026',
    imagens: [],
    descricao:
      'Participação no projeto de extensão focado na criação e difusão de sinais técnicos voltados para a área de Tecnologia da Informação e Comunicação, apoiando a inclusão de estudantes surdos.',
    destaque: 'Construção de acessibilidade linguística aplicada à computação.',
    tags: ['SinalizaTech', 'Libras', 'Acessibilidade', 'Extensão'],
    linkPrincipal: '',
    linkSecundario: '',
  },
  {
    id: 11,
    titulo: 'Vale Tech — Maratonas de Programação',
    categoria: 'Eventos & Feiras',
    local: 'IFCE Campus Aracati',
    ano: '2025',
    imagens: [],
    descricao:
      'Organização das Maratonas Júnior e Aberta de Programação durante o Vale Tech no IFCE, incluindo elaboração e configuração das provas no Beecrowd e design das medalhas dos vencedores.',
    destaque: 'Estímulo à lógica de programação e competitividade saudável no campus.',
    tags: ['Vale Tech', 'Beecrowd', 'Organização', 'Programação Competitiva'],
    linkPrincipal: '',
    linkSecundario: '',
  },
  {
    id: 12,
    titulo: 'Maratona de Programação da SBC / ICPC 2025',
    categoria: 'Eventos & Feiras',
    local: 'Ceará',
    ano: '2025',
    imagens: [],
    descricao:
      'Participação como competidora na fase regional da maior competição universitária de programação competitiva do mundo, resolvendo desafios de algoritmos e estruturas de dados em C++.',
    destaque: 'Trabalho em equipe sob pressão com foco em otimização e resolução de problemas.',
    tags: ['ICPC', 'SBC', 'Programação Competitiva', 'C++'],
    linkPrincipal: '',
    linkSecundario: '',
  },
]);

const itensFiltrados = computed(() => {
  if (categoriaAtiva.value === 'Todos') {
    return itens.value;
  }
  return itens.value.filter((i) => i.categoria === categoriaAtiva.value);
});
</script>
